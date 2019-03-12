import React from "react";
import MessageBox from "../../common/messageBox/messageBox";

export interface IHelpModalProps {
    show?: boolean;
}

export class HelpModal extends React.Component {
    render() {
        return (
            <div>
                <MessageBox
                    title="Help"
                    message="Shortcuts"

                />
            </div>
        )
    }
}