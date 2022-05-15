import s from '../../Navbar.module.css'

type FrinedBlockType = {
    name: string
    ava: string
}


export const FriendBlock = (props: FrinedBlockType) => {
    return (
        <div className={s.friendBlock}>
            <img className={s.img} src={props.ava} />
            <div className={s.name}>{props.name}</div>
        </div>
    )
}