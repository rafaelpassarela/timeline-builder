import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { InlineResponse200 } from '../models/InlineResponse200';

import { TestApiRequestFactory, TestApiResponseProcessor} from "../apis/TestApi";
export class ObservableTestApi {
    private requestFactory: TestApiRequestFactory;
    private responseProcessor: TestApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TestApiRequestFactory,
        responseProcessor?: TestApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TestApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TestApiResponseProcessor();
    }

    /**
     * Returns a simple Ok message for API Connectivity test.
     */
    public apiTestGet(_options?: Configuration): Observable<InlineResponse200> {
        const requestContextPromise = this.requestFactory.apiTestGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiTestGet(rsp)));
            }));
    }
 
}
