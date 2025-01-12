import { Layout } from "antd"
import { Header } from "../components/Public"
import { Content } from "antd/es/layout/layout"
import { Route, Routes } from "react-router-dom";
import { HomePage, NotFoundPage, UserDetailPage } from "../pages/Public";

const contentStyle: React.CSSProperties = {
    backgroundColor: '#fff',
};

const layoutStyle = {
    overflow: 'hidden',
    minHeight: '100vh',
    width: '100%',
    background: '#fff',
};


const UserRouter = () => {
    return (
        <Layout style={layoutStyle}>
            <Header />
            <Layout>
                <Content style={contentStyle}>
                    <div>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/:userId" element={<UserDetailPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default UserRouter