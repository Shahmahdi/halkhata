import { types, getSnapshot } from 'mobx-state-tree';
import axios from 'axios';

export const Customer = types.model('customer', {
  id: types.optional(types.maybe(types.string), undefined),
  name: types.optional(types.string, ''),
  contactPerson: types.optional(types.string, ''),
  email: types.optional(types.string, ''),
  professionalDetails: types.optional(types.string, ''),
  mobile: types.optional(types.string, ''),
  alternativeMobile: types.optional(types.string, ''),
  district: types.optional(types.string, ''),
  areaName: types.optional(types.string, ''),
  buildingName: types.optional(types.string, ''),
  roadNo: types.optional(types.string, ''),
  buildingNo: types.optional(types.string, ''),
  floor: types.optional(types.string, ''),
  flatNo: types.optional(types.string, ''),
  roomNo: types.optional(types.string, ''),
  shopNo: types.optional(types.string, ''),
  thana: types.optional(types.string, ''),
  postCode: types.optional(types.string, ''),
  connectionDate: types.optional(types.Date, new Date()),
  ipOrUsername: types.optional(types.string, ''),
  bandwidth: types.optional(types.string, ''),
  monthlyRent: types.optional(types.number, 0),
  connectedBy: types.optional(types.string, ''),
}).actions(self => ({
  setName(name: string) {
    self.name = name;
  },
  setContactPerson(person: string) {
    self.contactPerson = person;
  },
  setEmail(email: string) {
    self.email = email;
  },
  setProfessionalDetails(professionalDetails: string) {
    self.professionalDetails = professionalDetails;
  },
  setMobile(mobile: string) {
    self.mobile = mobile;
  },
  setAlternativeMobile(alternativeMobile: string) {
    self.alternativeMobile = alternativeMobile;
  },
  setDistrict(district: string) {
    self.district = district;
  },
  setAreaName(areaName: string) {
    self.areaName = areaName;
  },
  setBuildingName(buildingName: string) {
    self.buildingName = buildingName;
  },
  setRoadNo(roadNo: string) {
    self.roadNo = roadNo;
  },
  setBuildingNo(buildingNo: string) {
    self.buildingNo = buildingNo;
  },
  setFloor(floor: string) {
    self.floor = floor;
  },
  setFlatNo(flatNo: string) {
    self.flatNo = flatNo;
  },
  setRoomNo(roomNo: string) {
    self.roomNo = roomNo;
  },
  setShopNo(shopNo: string) {
    self.shopNo = shopNo;
  },
  setThana(thana: string) {
    self.thana = thana;
  },
  setPostCode(postCode: string) {
    self.postCode = postCode;
  },
  setConnectionDate(connectionDate: Date) {
    self.connectionDate = connectionDate;
  },
  setIpOrUsername(ipOrUsername: string) {
    self.ipOrUsername = ipOrUsername;
  },
  setBandwidth(bandwidth: string) {
    self.bandwidth = bandwidth;
  },
  setMonthlyRent(monthlyRent: number) {
    self.monthlyRent = monthlyRent;
  },
  setConnectedBy(connectedBy: string) {
    self.connectedBy = connectedBy;
  },
  save() {
    let customerInfo = getSnapshot(self);
    axios.post('http://localhost:4000/customer/create', customerInfo)
      // tslint:disable-next-line:no-console
      .then(res => console.log(res))
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  }
}));

export const CustomerStore = types.model('customerStore', {
  customers: types.optional(types.array(Customer), []),
  guestCustomer: types.optional(Customer, {})
});