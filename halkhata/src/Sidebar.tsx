import * as React from 'react';
import { Sidebar, Menu } from 'semantic-ui-react';

export const SideNavigationBar = () => (
  <Sidebar
    as={Menu}
    animation="overlay"
    icon="labeled"
    inverted={true}
    vertical={true}
    visible={true}
    width="thin"
    style={{ top: '47px' }}
  >
    <Menu.Item as="a">Customer</Menu.Item>
    <Menu.Item as="a">Report</Menu.Item>
    <Menu.Item as="a">Settings</Menu.Item>
  </Sidebar>
);