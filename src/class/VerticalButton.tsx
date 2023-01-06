import { Component } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { FaEdit, FaPlus, FaTrashAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { EditButtonType } from './EditButtonType';

interface VerticalButtonProps {
    btnType: EditButtonType;
    disabled: boolean;
    callback: (action: EditButtonType) => void;
}

class VerticalButton extends Component<VerticalButtonProps> {

    constructor(props: VerticalButtonProps) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
    }

    getButton(type: EditButtonType) {
        switch (type) {
            case 'up': return <AiFillCaretUp />;
            case 'down': return <AiFillCaretDown />;
            case 'delete': return <FaTrashAlt />;
            case 'insert': return <FaPlus />;
            case 'edit': return <FaEdit />;
            default:
                return null;
        }
    }

    clickHandler() {
        this.props.callback(this.props.btnType);
    }

    getButtonVariant(type: EditButtonType) {
        const typeStr = type as string;
        if (typeStr === "up" || typeStr === "down") {
            return "secondary";
        }

        if (typeStr === "delete") {
            return "danger";
        }

        return "warning";
    }

    render() {
        const { btnType } = this.props;
        const variant = this.getButtonVariant(btnType);
        return (
            <div className='spacer-bottom'>
                <Button variant={variant} size="sm" disabled={this.props.disabled} onClick={this.clickHandler}>
                    {this.getButton(btnType)}
                </Button>
            </div>
        );
    }

}

export default VerticalButton;