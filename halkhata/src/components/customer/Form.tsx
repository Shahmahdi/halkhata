import * as React from 'react';
import { Button, Icon, Form, Divider, Select, Input } from 'semantic-ui-react';

export const CustomerForm = () => (
  <Form className="fl w-100">
    <Divider horizontal={true} section={true}>Personal Information</Divider>
    <Form.Group widths={2}>
      <Form.Input 
        label="Name / Company Name" 
        placeholder="Customer's Name / Company Name" 
        // value={}
      />
      <Form.Input label="Contact Person" placeholder="Mr. John Doe" />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label="Email" placeholder="john@gmail.com" />
      <Form.Input label="Profession Detail" placeholder="Business" />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label="Mobile No." placeholder="01789442325" />
      <Form.Input label="Alternative Mobile No." placeholder="01684249609" />
    </Form.Group>

    <Divider horizontal={true}>Address</Divider>

    <Form.Group widths={12}>
      <Form.Field inline={true} style={{ margin: 'auto' }}>
        <label>District</label>
        <Select
          placeholder="Select your country"
          options={[
            { key: 'dhaka', value: 'dhaka', text: 'Dhaka' }
          ]}
        />
      </Form.Field>
    </Form.Group>
    <Form.Group widths={12}>
      <Form.Field inline={true} style={{ margin: 'auto' }}>
        <label>Area Name</label>
        <Select
          placeholder="Select your Area"
          options={[
            { key: 'amtola', value: 'amtola', text: 'Amtola' },
            { key: 'chowdhuryPara', value: 'chowdhuryPara', text: 'Chowdhury Para' },
            { key: 'jahanaraGarden', value: 'jahanaraGarden', text: 'Jahanara Garden' },
            { key: 'mostofaRoad', value: 'mostofaRoad', text: 'Mostofa road' },
          ]}
        />
      </Form.Field>
    </Form.Group>
    <Form.Group widths={12}>
      <Form.Field inline={true} style={{ margin: 'auto' }}>
        <label>Building Name</label>
        <Select
          placeholder="Select your Building Name"
          options={[
            { key: 'mimMonjil', value: 'mimMonjil', text: 'Mim Monjil' },
            { key: 'crescentVilla', value: 'crescentVilla', text: 'Crescent Villa' },
            { key: 'metro', value: 'metro', text: 'Metro' },
            { key: 'southBengalHostel', value: 'southBengalHostel', text: 'South Bengal Hostel' },
          ]}
        />
      </Form.Field>
    </Form.Group>
    <Form.Group widths={12}>
      <Form.Field inline={true} style={{ margin: 'auto' }}>
        <label>Road No</label>
        <Input placeholder="Road No" />
      </Form.Field>
    </Form.Group>
    <Form.Group widths={12}>
      <Form.Field inline={true} style={{ margin: 'auto' }}>
        <label>Building No</label>
        <Input placeholder="Building No" />
      </Form.Field>
    </Form.Group>
    <Form.Group widths={12}>
      <Form.Field inline={true} style={{ margin: 'auto' }}>
        <label>Floor</label>
        <Select
          placeholder="Floor"
          options={[
            { key: '1st', value: '1st', text: '1st Floor' },
            { key: '2nd', value: '2nd', text: '2nd Floor' },
            { key: '3rd', value: '3rd', text: '3rd Floor' },
            { key: '4th', value: '4th', text: '4th Floor' },
            { key: '5th', value: '5th', text: '5th Floor' },
            { key: '6th', value: '6th', text: '6th Floor' },
          ]}
        />
      </Form.Field>
    </Form.Group>
    <Form.Group widths={12}>
      <Form.Field inline={true} style={{ margin: 'auto' }}>
        <label>Flat No</label>
        <Input placeholder="Flat No" />
      </Form.Field>
    </Form.Group>
    <Form.Group widths={12}>
      <Form.Field inline={true} style={{ margin: 'auto' }}>
        <label>Room No</label>
        <Input placeholder="Room No" />
      </Form.Field>
    </Form.Group>
    <Form.Group widths={12}>
      <Form.Field inline={true} style={{ margin: 'auto' }}>
        <label>Shop No</label>
        <Input placeholder="Shop No" />
      </Form.Field>
    </Form.Group>
    <Form.Group widths={12}>
      <Form.Field inline={true} style={{ margin: 'auto' }}>
        <label>Thana</label>
        <Select
          placeholder="Thana"
          options={[
            { key: 'sherebanglanagor', value: 'sherebanglanagor', text: 'Sher-e-bangla Nagor' },
            { key: 'tejgoan', value: 'tejgoan', text: 'Tejgoan' },
          ]}
        />
      </Form.Field>
    </Form.Group>
    <Form.Group widths={12}>
      <Form.Field inline={true} style={{ margin: 'auto' }}>
        <label>Post code</label>
        <Select
          placeholder="post code"
          options={[
            { key: '1215', value: '1215', text: '1215' },
          ]}
        />
      </Form.Field>
    </Form.Group>

    <Divider horizontal={true}>Internet</Divider>

    <Form.Group widths={2}>
      <Form.Input label="Connection Date" placeholder="04-11-2018" />
      <Form.Input label="IP / Username" placeholder="192.168.32.10" />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label="Bandwidth" placeholder="2Mb/4Mb" />
      <Form.Input label="Monthly Rent / Charge" placeholder="0" />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label="Connected by" placeholder="Mr. x" />
    </Form.Group>

    <Button color="red" floated="left">
      <Icon name="checkmark" /> Close
                  </Button>
    <Button color="green" type="submit" floated="right">
      <Icon name="checkmark" /> Submit
                  </Button>
  </Form>
);