import * as React from 'react';

export const TopNavigation = () => (
  <nav className="bp3-navbar bp3-dark">
    <div className="bp3-navbar-group bp3-align-left">
      <div className="bp3-navbar-heading">Blueprint</div>
      <input className="bp3-input" placeholder="Search files..." type="text" />
    </div>
    <div className="bp3-navbar-group bp3-align-right">
      <button className="bp3-button bp3-minimal bp3-icon-home">Home</button>
      <button className="bp3-button bp3-minimal bp3-icon-document">Files</button>
      <span className="bp3-navbar-divider" />
      <button className="bp3-button bp3-minimal bp3-icon-user" />
      <button className="bp3-button bp3-minimal bp3-icon-notifications" />
      <button className="bp3-button bp3-minimal bp3-icon-cog" />
    </div>
  </nav>
);