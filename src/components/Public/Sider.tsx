import Sider from "antd/es/layout/Sider";
import { useNavigate } from "react-router-dom";

const siderStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    borderRight: '1px solid #ccc',
    padding: '16px 4px 0 4px'
};

const categories = [
    {
        _id: 1,
        label: 'Liên minh huyền thoại',
        img: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
    },
    {
        _id: 2,
        label: 'Đấu trường chân lý',
        img: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__a844a8e0-34cf-11ed-838c-b120e70abb59__game_avatars.jpg',
    },
    {
        _id: 3,
        label: 'PUBG PC',
        img: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__c5802ad0-33e2-11ed-838c-b120e70abb59__game_avatars.jpg',
    }
];

const MainSider = () => {
    const navigate = useNavigate();

    return (
        <Sider width="250" style={siderStyle}>
            <p className="pl-3 mb-3 text-gray-500">Danh mục game</p>
            <ul>
                {categories.map(category => (
                    <li
                        onClick={() => navigate(`/category/${category._id}`)}
                        className="pl-3 py-3 flex gap-2 items-center cursor-pointer hover:bg-blue-50 duration-300"
                        key={category._id}
                    >
                        <img width={35} src={category.img} alt={category.label} />
                        <span>{category.label}</span>
                    </li>
                ))}
            </ul>
        </Sider>
    )
}

export default MainSider