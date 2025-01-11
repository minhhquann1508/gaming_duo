import { Col, Row } from "antd";
import UserItem from "./UserItem";

const users = [
    {
        _id: '1',
        avatar: 'https://files.playerduo.net/production/images/9e79ce9a-f64d-43f3-a8e5-1f0baf60dabb__89443010-b38e-11ef-9376-b533eb6f1b4c__player_avatar.jpg',
        name: 'Gynnie',
        desc: 'Mô tả thử',
        price: 35000,
        games: [
            {
                _id: '1',
                img: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__d8d57300-37bc-11ed-838c-b120e70abb59__game_avatars.jpg'
            },
            {
                _id: '2',
                img: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__95575640-37c4-11ed-838c-b120e70abb59__game_avatars.jpg'
            },
            {
                _id: '2',
                img: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__4bb638e0-33f9-11ed-838c-b120e70abb59__game_avatars.jpg'
            }
        ],
        rating: {
            total: 5,
            numberRating: 10
        }
    },
    {
        _id: '2',
        avatar: 'https://files.playerduo.net/production/images/9e79ce9a-f64d-43f3-a8e5-1f0baf60dabb__89443010-b38e-11ef-9376-b533eb6f1b4c__player_avatar.jpg',
        name: 'Gynnie',
        desc: 'Mô tả thử',
        price: 35000,
        games: [
            {
                _id: '1',
                img: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__d8d57300-37bc-11ed-838c-b120e70abb59__game_avatars.jpg'
            },
            {
                _id: '2',
                img: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__95575640-37c4-11ed-838c-b120e70abb59__game_avatars.jpg'
            },
            {
                _id: '2',
                img: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__4bb638e0-33f9-11ed-838c-b120e70abb59__game_avatars.jpg'
            }
        ],
        rating: {
            total: 5,
            numberRating: 10
        }
    },
    {
        _id: '3',
        avatar: 'https://files.playerduo.net/production/images/9e79ce9a-f64d-43f3-a8e5-1f0baf60dabb__89443010-b38e-11ef-9376-b533eb6f1b4c__player_avatar.jpg',
        name: 'Gynnie',
        desc: 'Mô tả thử',
        price: 35000,
        games: [
            {
                _id: '1',
                img: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__d8d57300-37bc-11ed-838c-b120e70abb59__game_avatars.jpg'
            },
            {
                _id: '2',
                img: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__95575640-37c4-11ed-838c-b120e70abb59__game_avatars.jpg'
            },
            {
                _id: '2',
                img: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__4bb638e0-33f9-11ed-838c-b120e70abb59__game_avatars.jpg'
            }
        ],
        rating: {
            total: 5,
            numberRating: 10
        }
    },
    {
        _id: '4',
        avatar: 'https://files.playerduo.net/production/images/9e79ce9a-f64d-43f3-a8e5-1f0baf60dabb__89443010-b38e-11ef-9376-b533eb6f1b4c__player_avatar.jpg',
        name: 'Gynnie',
        desc: 'Mô tả thử',
        price: 35000,
        games: [
            {
                _id: '1',
                img: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__d8d57300-37bc-11ed-838c-b120e70abb59__game_avatars.jpg'
            },
            {
                _id: '2',
                img: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__95575640-37c4-11ed-838c-b120e70abb59__game_avatars.jpg'
            },
            {
                _id: '2',
                img: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__4bb638e0-33f9-11ed-838c-b120e70abb59__game_avatars.jpg'
            }
        ],
        rating: {
            total: 5,
            numberRating: 10
        }
    },
    {
        _id: '5',
        avatar: 'https://files.playerduo.net/production/images/9e79ce9a-f64d-43f3-a8e5-1f0baf60dabb__89443010-b38e-11ef-9376-b533eb6f1b4c__player_avatar.jpg',
        name: 'Gynnie',
        desc: 'Mô tả thử',
        price: 35000,
        games: [
            {
                _id: '1',
                img: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__d8d57300-37bc-11ed-838c-b120e70abb59__game_avatars.jpg'
            },
            {
                _id: '2',
                img: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__95575640-37c4-11ed-838c-b120e70abb59__game_avatars.jpg'
            },
            {
                _id: '2',
                img: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__4bb638e0-33f9-11ed-838c-b120e70abb59__game_avatars.jpg'
            }
        ],
        rating: {
            total: 5,
            numberRating: 10
        }
    }
];

const UserList = () => {
    return (
        <Row>
            {users.map(user => (
                <Col flex={1} key={user._id}>
                    <UserItem user={user} />
                </Col>
            ))}
        </Row>
    )
}

export default UserList