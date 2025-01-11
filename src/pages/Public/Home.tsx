import { Typography } from "antd"
import { MainCarousel, StoryList, UserList } from "../../components/Public"

const { Title } = Typography;

const HomePage = () => {
    return (
        <>
            <MainCarousel />
            <section className="my-5">
                <StoryList />
            </section>
            <section className="my-5">
                <Title level={4}>Kết quả tìm kiếm</Title>
                <UserList />
            </section>
        </>
    )
}

export default HomePage