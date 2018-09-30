import * as React from 'react';
import {Button, DropdownItem, DropdownToggle, Input, InputGroup, InputGroupAddon, InputGroupButtonDropdown} from 'reactstrap';
import DropdownMenu from 'reactstrap/lib/DropdownMenu';
import Navbar from 'reactstrap/lib/Navbar';
import Popover from 'reactstrap/lib/Popover';
import PopoverHeader from 'reactstrap/lib/PopoverHeader';
import PopoverBody from 'reactstrap/lib/PopoverBody';
import ReactSummernote from '../../js/apps/card_creator/elements/schemaform/ReactSummernote';

class App<P> extends React.Component<{}, IAppState> {

    constructor(props: any) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    public toggle() {

        if (! this.state.popoverOpen) {
            // this is a bit of a hack to position it exactly where we want it.
            document.getElementById('annotationbar-anchor')!.style.cssText
                = 'position: relative; top: 300px; left: 300px;';
        }

        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    public render() {
        return (
            <div>

                <div className="test rounded p-1 m-2 annotatebar text-center" style={{}}>

                    <Button size="md"
                            type="button"
                            className="btn p-1 m-1 annotatebar-btn"
                            title=""
                            aria-label=""
                            style={{ }}>

                        <span className="fas fa-highlighter"
                              aria-hidden="true"
                              style={{ color: 'rgba(255,255,0)' }}/>

                    </Button>

                    <Button size="md"
                            type="button"
                            className="btn p-1 m-1 annotatebar-btn"
                            title=""
                            aria-label=""
                            style={{ }}>

                        <span className="fas fa-highlighter annotatebar-btn-highlighter"
                              aria-hidden="true"
                              style={{color: 'rgba(255,0,0)'}}/>

                    </Button>

                    <Button size="md"
                            type="button"
                            className="btn p-1 m-1 annotatebar-btn annotatebar-btn-highlighter"
                            title=""
                            aria-label=""
                            style={{ }}>

                        <span className="fas fa-highlighter"
                              aria-hidden="true"
                              style={{color: 'rgba(0,255,0)'}}/>

                    </Button>

                    <Button size="md"
                            type="button"
                            className="btn p-1 m-1 annotatebar-btn"
                            title=""
                            aria-label=""
                            style={{ }}>

                        <span className="fas fa-comment"
                              aria-hidden="true"
                              style={{color: 'rgba(255,255,255)'}}/>

                    </Button>

                </div>


                {/*<div id="annotationbar-anchor">*/}

                {/*</div>*/}

                <Button id="annotationbar-anchor" onClick={this.toggle}>
                    Launch Popover
                </Button>

                <Popover placement="bottom"
                         isOpen={this.state.popoverOpen}
                         className="annotationbar-popover"
                         target="annotationbar-anchor"
                         toggle={this.toggle}>

                    <div>
                        thisis the asdasdf
                    </div>

                    {/*<PopoverHeader>Popover Title</PopoverHeader>*/}
                    {/*<PopoverBody>*/}
                        {/*<div className="test rounded p-1 m-2 annotatebar text-center" style={{}}>*/}

                            {/*<Button size="md"*/}
                                    {/*type="button"*/}
                                    {/*className="btn p-1 m-1 annotatebar-btn"*/}
                                    {/*title=""*/}
                                    {/*aria-label=""*/}
                                    {/*style={{ }}>*/}

                                {/*<span className="fas fa-highlighter"*/}
                                      {/*aria-hidden="true"*/}
                                      {/*style={{color: 'rgba(255,255,0)'}}/>*/}

                            {/*</Button>*/}

                            {/*<Button size="md"*/}
                                    {/*type="button"*/}
                                    {/*className="btn p-1 m-1 annotatebar-btn"*/}
                                    {/*title=""*/}
                                    {/*aria-label=""*/}
                                    {/*style={{ }}>*/}

                                {/*<span className="fas fa-highlighter annotatebar-btn-highlighter"*/}
                                      {/*aria-hidden="true"*/}
                                      {/*style={{color: 'rgba(255,0,0)'}}/>*/}

                            {/*</Button>*/}

                            {/*<Button size="md"*/}
                                    {/*type="button"*/}
                                    {/*className="btn p-1 m-1 annotatebar-btn annotatebar-btn-highlighter"*/}
                                    {/*title=""*/}
                                    {/*aria-label=""*/}
                                    {/*style={{ }}>*/}

                                {/*<span className="fas fa-highlighter"*/}
                                      {/*aria-hidden="true"*/}
                                      {/*style={{color: 'rgba(0,255,0)'}}/>*/}

                            {/*</Button>*/}

                            {/*<Button size="md"*/}
                                    {/*type="button"*/}
                                    {/*className="btn p-1 m-1 annotatebar-btn"*/}
                                    {/*title=""*/}
                                    {/*aria-label=""*/}
                                    {/*style={{ }}>*/}

                                {/*<span className="fas fa-comment"*/}
                                      {/*aria-hidden="true"*/}
                                      {/*style={{color: 'rgba(255,255,255)'}}/>*/}

                            {/*</Button>*/}

                        {/*</div>*/}

                    {/*</PopoverBody>*/}
                </Popover>
            </div>
        );
    }



}

export default App;

interface IAppState {
    popoverOpen: boolean;
}




