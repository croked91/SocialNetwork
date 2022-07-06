import { FriendsType, SideItemType } from "./store";

export type SidebarType = {
  sideItems: SideItemType[],
  friends: FriendsType
}



let initialState = {
  sideItems: [
    { id: 1, title: 'Profile', icon: 'https://img.icons8.com/nolan/64/electronic-identity-card.png' },
    { id: 2, title: 'Dialogs', icon: 'https://img.icons8.com/nolan/64/electronic-identity-card.png' },
    { id: 3, title: 'News', icon: 'https://img.icons8.com/nolan/64/electronic-identity-card.png' },
    { id: 4, title: 'Music', icon: 'https://img.icons8.com/nolan/64/electronic-identity-card.png' },
    { id: 5, title: 'Settings', icon: 'https://img.icons8.com/nolan/64/electronic-identity-card.png' },
    { id: 6, title: 'Photos', icon: 'https://img.icons8.com/nolan/64/electronic-identity-card.png' },
  ],
  friends: {
    blockTitle: 'Friends',
    friendsList: [
      { id: 1, name: "Egor", avaSourse: 'https://yt3.ggpht.com/yti/APfAmoGgMQ6-OWgGlikFCskVa51OV8SCZdi_CY3Fb4mLSw=s88-c-k-c0x00ffffff-no-rj-mo' },
      { id: 2, name: "Kolya", avaSourse: 'https://yt3.ggpht.com/ytc/AKedOLQx611hSDa1qiS1edfsm36nwLPPFjlsYWTwRmHb=s900-c-k-c0x00ffffff-no-rj' },
      { id: 3, name: "Kuprovskiy", avaSourse: 'https://sun7-9.userapi.com/s/v1/if1/6rTSjX7ZX_-OVMxWJVrwCz23tpty7OpgOrYchNCvtdaFc_iCCRyGm-3HD7fw93epRzCJOYCA.jpg?size=400x400&quality=96&crop=97,0,1853,1853&ava=1' },
      { id: 4, name: "Albina", avaSourse: 'https://sun7-6.userapi.com/s/v1/if1/KhLJQsVX5EEkBjVe9a3ulNiSyC1P_9xHutTVoo-11s_zI06w74ecmPZYOayplz75WEdzttvF.jpg?size=200x200&quality=96&crop=2,148,1725,1725&ava=1' },
      { id: 5, name: "Tolyan", avaSourse: 'https://sun7-9.userapi.com/s/v1/ig2/PYhccL8MKZvj4BY6v7qyjGF2MamYROMbNhvYvLqvzgjC-5MZHb7Geqt0KDEowFg4OTv02rnUqojPrxFbFlwq2iHl.jpg?size=400x400&quality=96&crop=7,262,1601,1601&ava=1' },
      { id: 6, name: "MehmetIbnAbdul", avaSourse: 'https://avatars.mds.yandex.net/i?id=4fcdca120f9f711cd58126c4a8a3cc60-5026122-images-thumbs&n=13&exp=1' },
      { id: 7, name: "Viktor", avaSourse: 'https://avatars.mds.yandex.net/i?id=c25f7e254119e5e8fe1f6349c297f7cf-4911504-images-thumbs&n=13&exp=1' }
    ]
  }
}



export const sidebarReducer = (state: SidebarType = initialState, action: any) => {
  return state;
}




