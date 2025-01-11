import { Typography } from "antd"
import { StarIcon } from "lucide-react"

export interface UserItemType {
    _id: string
    avatar: string
    name: string
    desc: string
    price: number
    games: Game[]
    rating: Rating
}

export interface Game {
    _id: string
    img: string
}

export interface Rating {
    total: number
    numberRating: number
}

const { Title, Text } = Typography;

const UserItem = ({ user }: { user: UserItemType }) => {
    const { avatar, name, desc, games, rating, price } = user;
    return (
        <div className="border rounded-lg w-fit overflow-hidden cursor-pointer hover:border-gray-300">
            <div className="relative">
                <img src={avatar} alt={name} />
                <span
                    className="bg-red-500 text-white font-bold py-2 px-3 rounded-full absolute bottom-[10px] right-[10px]"
                >
                    {price.toLocaleString()} đ/h
                </span>
            </div>
            <div className="px-2 py-3">
                <Title level={5} style={{ marginBottom: 6 }}>{name}</Title>
                <Text className="text-gray-600">{desc}</Text>
                <div className="flex items-center justify-between mt-2">
                    <ul className="flex items-end gap-1">
                        {games.map(game => (
                            <img
                                width={25}
                                height={25}
                                className="rounded-full"
                                key={game._id}
                                src={game.img}
                                alt={game._id}
                            />
                        ))}
                    </ul>
                    <span className="flex items-center"><StarIcon size={16} /> <span className="font-bold ml-0.5">{rating.total}</span> <span className="font-bold ml-1">({rating.numberRating})</span></span>
                </div>
            </div>
        </div>
    )
}

export default UserItem