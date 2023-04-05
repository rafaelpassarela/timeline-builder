import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { InlineResponse200 } from '../models/InlineResponse200';
import { ObservableTestApi } from './ObservableAPI';

import { TestApiRequestFactory, TestApiResponseProcessor} from "../apis/TestApi";
export class PromiseTestApi {
    private api: ObservableTestApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TestApiRequestFactory,
        responseProcessor?: TestApiResponseProcessor
    ) {
        this.api = new ObservableTestApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a simple Ok message for API Connectivity test.
     */
    public apiTestGet(_options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.apiTestGet(_options);
        return result.toPromise();
    }


}



