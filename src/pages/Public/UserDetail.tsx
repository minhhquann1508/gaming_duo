import { Button, Col, Row, Typography } from "antd"
import { Heart, MessageCircle, StarIcon } from "lucide-react";

const { Title, Text } = Typography;

const UserDetailPage = () => {
    return (
        <div className="max-w-[1400px] mx-auto py-5">
            <Row>
                <Col span={5}>
                    <div>
                        <img className="w-full rounded-lg" src="https://files.playerduo.net/production/images/64c723d5-93c1-4626-a7e8-cb24f6b516f6__e4c319d0-bad0-11ef-9376-b533eb6f1b4c__player_avatar.jpg" alt="hình ảnh" />
                    </div>
                </Col>
                <Col span={13} style={{ padding: '0 12px' }}>
                    <div className="mx-5">
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
                    </div>
                </Col>
                <Col span={6} style={{ padding: '0 12px' }}>
                    <div className="px-3 py-5 border rounded-lg">
                        <Title level={3}>99.000 đ/h</Title>
                        <div className="flex gap-0.5 items-center mb-5">
                            {new Array(5).fill(null).map((_el, index) => <StarIcon size={18} key={index} />)}
                            <span className="ml-2">77 Đánh giá</span>
                        </div>
                        <Button type="primary" className="flex w-full mb-3 items-center py-6 text-lg font-bold">THUÊ</Button>
                        <Button className="flex w-full mb-3 items-center py-6 text-lg font-bold">DONATE</Button>
                        <Button className="flex w-full mb-3 items-center py-6 text-lg font-bold" icon={<MessageCircle size={16} />}>CHAT</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserDetailPage