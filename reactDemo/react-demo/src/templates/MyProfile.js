import React from 'react';
import FetchData from "./custom-hooks/FetchData";
import SettingsIcon from "../pictures/icons8-settings.png";
import DefaultUserIcon from "../pictures/bubble-gum-avatar-icon.png";
import {RedirectFunctions} from "../js/RedirectFunctions";

const MyProfileComponent = () => {
    const { data: user, error: userError, loading: userLoading } = FetchData("GET", "/users/profile", null, null);
    const redirectFunctions = RedirectFunctions();
    return (
        <div>
            <div className="contentDiv accountOverview-center-div">
                <div id="accountOverview-center-field">
                    {userLoading && <p>Loading...</p>}

                    {userError && (
                        <div className="error-message">
                            <p>Error: {userError.message}</p>
                        </div>
                    )}

                    {user && !userLoading && !userError && (
                        <div id="account-dashboard">
                            <div id="account-image-field">
                                <div id="account-image-settings">
                                    <div id="settings-field">
                                        <img
                                            className="settings-pic"
                                            src={SettingsIcon}
                                            alt="Settings Picture"
                                            onClick={() => redirectFunctions.redirectTo("users/profile/settings")}
                                        />
                                    </div>
                                    <div id="account-image">
                                        <img
                                            className="profile-pic"
                                            src={user.profile_pic_url ? user.profile_pic_url : DefaultUserIcon}
                                            alt="User Profile Picture"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div id="account-bio-field">
                                <div id="account-bio-txt">
                                    <p className="margin-top-a margin-bot-a">{user.first_name} {user.last_name}</p>
                                </div>
                            </div>
                            <div id="account-stats-field">
                                <div id="personal-info-header-txt">
                                    <p>Personal Info</p>
                                </div>
                                <div id="personal-info-txt">
                                    <p>Email: {user.email}</p>
                                </div>
                                <div id="personal-info-header-txt">
                                    <p>General Information</p>
                                </div>
                                <div id="personal-info-txt">
                                </div>
                                <div id="personal-info-txt">
                                    <p>Total friends: {user.total_friends}</p>
                                </div>
                                <div id="personal-info-txt">
                                    <p>Favourite author: {user.f_author_pseudonym}</p>
                                </div>
                                <div id="total-number-likes">{/* Total number of likes content */}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

};

export default MyProfileComponent;