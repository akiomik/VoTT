import React, { ReactElement } from "react";
import MessageBox from "../../common/messageBox/messageBox";
import { strings } from "../../../../common/strings";
import { ToolbarItemFactory } from "../../../../providers/toolbar/toolbarItemFactory";
import "./helpModal.scss";

export interface IHelpModalProps {
    show: boolean;
    onClose?: () => void;
}

export class HelpModal extends React.Component<IHelpModalProps> {
    public render() {
        return (
            <div className={"help-modal"}>
                <MessageBox
                    title={strings.editorPage.help.title}
                    message={this.getHelpBody()}
                    show={this.props.show}
                    onCancel={this.props.onClose}
                    hideFooter={true}
                />
            </div>
        );
    }

    private getHelpBody = () => {
        const items = ToolbarItemFactory.getToolbarItems();

        return (
            <div className="editor-help-body">
                <div className="editor-toolbar-help">
                    {
                        items.map(this.getToolbarItemRow)
                    }
                </div>
            </div>
        );
    }

    private getToolbarItemRow = (item) => {
        return (
            <div className={"toolbar-item"}>
                <i className={`fas ${item.config.icon} toolbar-btn`}></i>
                {item.config.tooltip}
            </div>
        );
    }
}
