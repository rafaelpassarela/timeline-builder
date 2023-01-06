import { Component } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { FaEdit, FaPlus, FaTrashAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { EditButtonType } from './EditButtonType';

interface VerticalButtonProps {
    btnType: EditButtonType;
    disabled: boolean;
}

class VerticalButton extends Component<VerticalButtonProps> {

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
                <Button variant={variant} size="sm" disabled={this.props.disabled}>
                    {this.getButton(btnType)}
                </Button>
            </div>
        );
    }

}

export default VerticalButton;