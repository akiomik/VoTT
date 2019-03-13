import React from "react";
import { IHelpModalProps, HelpModal } from "./helpModal";
import { mount } from "enzyme";
import registerToolbar from "../../../../registerToolbar";
import { ToolbarItemFactory } from "../../../../providers/toolbar/toolbarItemFactory";

describe("Help modal tests", () => {
    
    function createComponent(props?: IHelpModalProps){
        props = props || createProps();
        return mount(
            <HelpModal {...props}/>
        )
    }

    function createProps(): IHelpModalProps{
        return {
            show: true,
            onClose: jest.fn(),
        }
    }

    beforeAll(() => {
        registerToolbar();
    })
    
    it("Renders help for all toolbar buttons", () => {
        const wrapper = createComponent();
        expect(wrapper.exists(".editor-help-body"));
        expect(wrapper.exists(".editor-toolbar-help"));
        
        const toolbarItems = ToolbarItemFactory.getToolbarItems();
        expect(toolbarItems.length).toBeGreaterThan(0);
        expect(wrapper.find(".toolbar-item")).toHaveLength(toolbarItems.length);
    });
});