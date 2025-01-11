import { Typography } from "antd"
import { FilterSection, MainCarousel, StoryList, UserList } from "../../components/Public"

const { Title } = Typography;

const HomePage = () => {
    return (
        <>
            <MainCarousel />
            <section className="my-5">
                <StoryList />
            </section>
            <section className="my-5">
                <div className="mb-5">
                    <FilterSection />
                </div>
                <Title level={4} style={{ marginBottom: 20 }}>Kết quả tìm kiếm</Title>
                <UserList />
            </section>
        </>
    )
}

export default HomePage