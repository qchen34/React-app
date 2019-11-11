import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    return (
        <div className="main-footer">
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>Lorem2</li>
                            <li>Lorem2</li>
                            <li>Lorem2</li>
                            <li>Lorem2</li>

                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>Lorem2</li>
                            <li>Lorem2</li>
                            <li>Lorem2</li>
                            <li>Lorem2</li>

                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>Lorem2</li>
                            <li>Lorem2</li>
                            <li>Lorem2</li>
                            <li>Lorem2</li>

                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>Lorem2</li>
                            <li>Lorem2</li>
                            <li>Lorem2</li>
                            <li>Lorem2</li>

                        </ul>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} test App - All Rights Reserved
                </p>
                </div>
            </div>
            </div>
        </div>
    )
}

const FooterContainer = styled.footer`
    .footer-middle {
        background: var(--mainDark);
    }
`;