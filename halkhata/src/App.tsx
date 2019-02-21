import * as React from 'react';
import { TopNavigation } from './TopNavigation';
import { SideNavigationBar } from './Sidebar';
import { Modal, Button, Header, Icon } from 'semantic-ui-react';
import { CustomerForm } from './components/customer/Form';

class App extends React.Component {

  render() {
    return (
      <div className="cf">
        <TopNavigation />
        <SideNavigationBar />
        <div className="fl w-100 main_content_body">
          <div className="fl w-50 pa2">
            <Modal
              trigger={
                <Button>
                  <Header as="h2" icon={true} style={{ margin: '0px' }}>
                    <Icon name="add user" />
                    Add Customer
                </Header>
                </Button>}
              closeIcon={true}
              size={'large'}
            >
              <Header icon="add user" content="Add Customer" />
              <Modal.Content image={true} scrolling={true}>
                <CustomerForm />
              </Modal.Content>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
