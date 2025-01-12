import { Layout, Typography } from "antd"
import { FilterSection, MainCarousel, MainSider, StoryList, UserList } from "../../components/Public"
import { Content } from "antd/es/layout/layout";

const { Title } = Typography;

const HomePage = () => {
    return (
        <Layout>
            <MainSider />
            <Content style={{ padding: '16px 32px', background: '#fff' }}>
                <MainCarousel />
                <section className="my-5">
                    <StoryList />
                </section>
                <section className="my-5">
                    <div className="my-8">
                        <FilterSection />
                    </div>
                    <Title level={4} style={{ marginBottom: 20 }}>Kết quả tìm kiếm</Title>
                    <UserList />
                </section>
            </Content>
        </Layout>
    )
}

export default HomePage