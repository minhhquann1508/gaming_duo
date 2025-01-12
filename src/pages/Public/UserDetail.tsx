import { Button, Col, Row, Typography } from "antd"
import { Heart } from "lucide-react";

const { Title, Text } = Typography;

const UserDetailPage = () => {
    return (
        <div className="max-w-[1400px] mx-auto py-5">
            <Row>
                <Col span={4}>
                    <div>
                        <img src="https://files.playerduo.net/production/images/dcfc2d0b-f15a-4348-b3f8-28400a0e0ff9__6bbd9060-c60b-11ef-9376-b533eb6f1b4c__player_avatar.jpg" alt="hình ảnh" />
                    </div>
                </Col>
                <Col span={14} style={{ padding: '0 12px' }}>
                    <div className="flex items-center justify-between">
                        <Title level={2} style={{ margin: 0 }}>Ly Chưa Lớn</Title>
                        <Button type="primary" className="rounded-3xl" icon={<Heart size={15} />}>Theo dõi</Button>
                    </div>
                    {/* Thông tin cơ bản */}
                    <ul className="flex items-center justify-between py-5 border-b">
                        <li>
                            <Text strong>SỐ NGƯỜI THEO DÕI</Text>
                            <p className="text-red-600 text-lg">1106 người</p>
                        </li>
                        <li>
                            <Text strong>ĐÃ ĐƯỢC THUÊ</Text>
                            <p className="text-red-600 text-lg">4116 giờ</p>
                        </li>
                        <li>
                            <Text strong>TỈ LỆ HOÀN THÀNH</Text>
                            <p className="text-red-600 text-lg">98.01 % </p>
                        </li>
                        <li>
                            <Text strong>TÌNH TRẠNG THIẾT BỊ</Text>
                            <p className="text-red-600 text-lg">Không</p>
                        </li>
                    </ul>
                    {/* Thông tin games */}
                    <ul className="py-5 border-b flex gap-5 flex-wrap">
                        <li
                            className="overflow-hidden rounded-lg"
                            style={{
                                background: 'url("https://files.playerduo.net/production/game_backgrounds/715867c6-698f-411a-b4f9-1e9093130b60__c51b21f0-37c8-11ed-838c-b120e70abb59__game_backgrounds.jpg")'
                            }}
                        >
                            <p className="bg-black/65 rounded-lg text-white text-sm font-bold m-0 px-8 py-3 shadow-black/50 capitalize">
                                Khác
                            </p>
                        </li>
                        <li
                            className="overflow-hidden rounded-lg"
                            style={{
                                background: 'url("https://files.playerduo.net/production/game_backgrounds/715867c6-698f-411a-b4f9-1e9093130b60__c51b21f0-37c8-11ed-838c-b120e70abb59__game_backgrounds.jpg")'
                            }}
                        >
                            <p className="bg-black/65 rounded-lg text-white text-sm font-bold m-0 px-8 py-3 shadow-black/50 capitalize">
                                Đấu trường chân lý
                            </p>
                        </li>
                    </ul>
                    {/* Thông tin người dùng */}
                    <div className="py-6 border-b">
                        <Title level={3}>Thông tin</Title>
                    </div>
                </Col>
                <Col span={6} style={{ padding: '0 12px' }}>
                    <div className="p-3 border rounded-lg">
                        <Title level={3}>99.000 đ/h</Title>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserDetailPage