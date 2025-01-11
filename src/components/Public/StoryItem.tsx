import { Avatar, Col, Modal, Row } from "antd";
import { Eye } from "lucide-react";
import { useState } from "react";

interface StoryType {
    _id: string;
    src: string;
    thumbnail: string;
    views: number;
    user: {
        avatar: string;
        name: string;
    }

}

const StoryItem = ({ story }: { story: StoryType }) => {
    const { src, thumbnail, views, user } = story;
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div onClick={showModal} className="p-1 border w-fit rounded-lg hover:border-gray-400 cursor-pointer">
                <div className="w-[130px] h-[190px] relative">
                    <img src={thumbnail} alt={src} className="rounded-t-lg w-full h-full object-cover" />
                    <p className="flex text-sm items-center gap-1 absolute right-[5px] bottom-[5px] text-white"><Eye /> <span>{views}</span></p>
                </div>
                <div className="flex gap-3 items-center mt-2">
                    <Avatar size={30} src={user.avatar} />
                    <span className="font-bold">{user.name}</span>
                </div>
            </div>
            <Modal width={800} open={isModalOpen} footer={null} onCancel={handleCancel}>
                <Row className="mt-5">
                    <Col span={16}>
                        Nội dung video
                    </Col>
                    <Col span={8}>
                        Thông tin người đăng
                    </Col>
                </Row>
            </Modal>
        </>

    )
}

export default StoryItem