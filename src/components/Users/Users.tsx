import axios from 'axios'
import React from 'react'
import { Dispatch } from 'redux'
import { followFriend, setUsers, unFollowFriend, unSetUsers, UsersReducerType } from '../../redux/usersReducer'
import styles from './Users.module.css'


type UsersPropsType = {
    state: UsersReducerType
    dispatch: Dispatch
}



export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => this.props.dispatch(setUsers(res.data.items)))     
    }

    componentWillUnmount(): void {
        this.props.dispatch(unSetUsers())
    }

    follow(userID: number) {
        this.props.dispatch(followFriend(userID))
    }

    unFollow(userID: number) {
        this.props.dispatch(unFollowFriend(userID))
    }

    render(): React.ReactNode {
        const usersList = this.props.state.users.map(user =>
            <div key={user.id}>
                <span>
                    <div>
                        {
                            user.photos.small
                                ?
                                <img src={user.photos.small} className={styles.img} />
                                :
                                <img src={"https://cdn-icons-png.flaticon.com/512/456/456212.png"} className={styles.img} />
                        }
                    </div>
                    <div>
                        {user.followed
                            ?
                            <button onClick={() => this.unFollow(user.id)}>Unfollow</button>
                            :
                            <button onClick={() => this.follow(user.id)}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>Name: {user.name}</div>
                        <div>Status: {user.status}</div>
                    </span>
                </span>
            </div>
        )

        return (
            <div>
                {usersList}
            </div>
        )
    }
}

