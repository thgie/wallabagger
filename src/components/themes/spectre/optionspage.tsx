import * as React from "react";
import { connect } from "react-redux";
import { IWallabagSetup } from "setup";

import "css/options.css";

interface IOptionPageProps extends React.Props<any> {
    setup: IWallabagSetup;
}

const mapStateToProps = (state: any) => {
    return {
        setup: state.api.setup
    };
};
const OptionsPage_ = ({ setup = null }: IOptionPageProps) =>
    <div className="columns">
        <div className="column col-6">
            <h2>Wallabagger options</h2>
            <form action="">
                <section id="wallabagurl-section">

                    <div className="form-group">
                        <label className="form-label" htmlFor="input-wallabagurl">Wallabag URL</label>
                        <div className="input-group">
                            <span className="input-group-addon">http:// </span>
                            <input defaultValue={ setup.Url } className="form-input" type="text" placeholder="Wallabag URL" />
                            <button className="btn input-group-btn">Check URL</button>
                        </div>
                    </div>


                    <div className="form-group">
                        <label className="form-switch">
                            <input type="checkbox" />
                            <i className="form-icon"></i> Use HTTPS
                        </label>
                    </div>

                </section>

                <section className="hide" id="token-section">
                    <div className="form-group">
                        <label className="form-label" htmlFor="clientid-input">Client ID</label>
                        <div className="input-group">
                            <input className="form-input" type="text" id="clientid-input" placeholder="Client ID" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="clientsecret-input">Client secret</label>
                        <div className="input-group">
                            <input className="form-input" type="text" id="clientsecret-input" placeholder="Client secret" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="userlogin-input">User login</label>
                        <div className="input-group">
                            <input className="form-input" type="text" id="userlogin-input" placeholder="User login" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="userpassword-input">User password</label>
                        <div className="input-group">
                            <input className="form-input" type="password" id="userpassword-input" />
                            <button className="btn input-group-btn" id="getapptoken-button">Get token</button>
                        </div>
                    </div>

                </section>
            </form>

        </div>
    </div>;

export const OptionsPage = connect(mapStateToProps)(OptionsPage_);