let reRend = () => {

}

type PostType = {
    id: number
    post: string 
    likes: number
  }
  
  
  type DialogType = {
    id: number
    name: string
    avaSourse: string
  }
  
  type MessageType = {
    id: number
    name: string
    authorId: number
  }
  
  type MessagesType = {
    user: string
    message: MessageType[]
  }
  
  
  
  type SideItemType = {
    id: number
    title: string
    icon: string
  }
  
  type FriendsType = {
    blockTitle: string,
    friendsList: FriendType[]
  }
  
  type FriendType = {
    id: number
    name: string
    avaSourse: string
  }
  
  export type StateType = {
    sidebar: {
      sideItems: SideItemType[],
      friends: FriendsType
    }
    profilePage: { posts: PostType[]; newPostText: string };
    dialogsPage: {
      dialogs: DialogType[];
      messages: MessagesType;
    };
  }


export let state = {

    profilePage: {
        posts: [
            { id: 1, post: "Hi, it's my first post", likes: 15 },
            { id: 2, post: "Hi, it's my second post", likes: 20 },
            { id: 3, post: "Hi, it's my third post", likes: 24 },
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: "Egor", avaSourse: 'https://yt3.ggpht.com/yti/APfAmoGgMQ6-OWgGlikFCskVa51OV8SCZdi_CY3Fb4mLSw=s88-c-k-c0x00ffffff-no-rj-mo' },
            { id: 2, name: "Kolya", avaSourse: 'https://yt3.ggpht.com/ytc/AKedOLQx611hSDa1qiS1edfsm36nwLPPFjlsYWTwRmHb=s900-c-k-c0x00ffffff-no-rj' },
            { id: 3, name: "Kuprovskiy", avaSourse: 'https://sun7-9.userapi.com/s/v1/if1/6rTSjX7ZX_-OVMxWJVrwCz23tpty7OpgOrYchNCvtdaFc_iCCRyGm-3HD7fw93epRzCJOYCA.jpg?size=400x400&quality=96&crop=97,0,1853,1853&ava=1' },
            { id: 4, name: "Albina", avaSourse: 'https://sun7-6.userapi.com/s/v1/if1/KhLJQsVX5EEkBjVe9a3ulNiSyC1P_9xHutTVoo-11s_zI06w74ecmPZYOayplz75WEdzttvF.jpg?size=200x200&quality=96&crop=2,148,1725,1725&ava=1' },
            { id: 5, name: "Tolyan", avaSourse: 'https://sun7-9.userapi.com/s/v1/ig2/PYhccL8MKZvj4BY6v7qyjGF2MamYROMbNhvYvLqvzgjC-5MZHb7Geqt0KDEowFg4OTv02rnUqojPrxFbFlwq2iHl.jpg?size=400x400&quality=96&crop=7,262,1601,1601&ava=1' },
            { id: 6, name: "MehmetIbnAbdul", avaSourse: 'https://avatars.mds.yandex.net/i?id=4fcdca120f9f711cd58126c4a8a3cc60-5026122-images-thumbs&n=13&exp=1' },
            { id: 7, name: "Viktor", avaSourse: 'https://avatars.mds.yandex.net/i?id=c25f7e254119e5e8fe1f6349c297f7cf-4911504-images-thumbs&n=13&exp=1' }
        ],
        messages: {
            user: 'egor',
            message: [
                { id: 1, name: "Hi", authorId: 1 },
                { id: 2, name: "How are you", authorId: 1 },
                { id: 3, name: "It's paw paw buggie", authorId: 2 },
                { id: 4, name: "It's paw paw buggie", authorId: 2 },
                { id: 5, name: "It's paw paw buggie", authorId: 1 },
                { id: 6, name: "It's paw paw buggie", authorId: 1 },
                { id: 7, name: "It's paw paw buggie ", authorId: 2 },
                { id: 8, name: "It's paw paw buggie", authorId: 2 },
                { id: 9, name: "It's paw paw buggie", authorId: 1 },
                { id: 10, name: "It's paw paw buggie", authorId: 2 },
                { id: 11, name: "It's paw paw buggie", authorId: 1 },
                { id: 11, name: "It's paw paw buggie", authorId: 2 },
                { id: 12, name: "It's paw paw buggie", authorId: 1 },
            ],
        }
    },
        sidebar: {
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
}

export const addPost = () => {
    let postMessage = {
      id : 5,
      post: state.profilePage.newPostText,
      likes: 0
    }
    state.profilePage.posts.push(postMessage)
    state.profilePage.newPostText = ""
    reRend()
}

export const updateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText
  reRend()
}


export const subscribe = (rerenderEntireTree: ()=>void) => {
  reRend = rerenderEntireTree
}
 
