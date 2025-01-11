import { Button } from "antd"
import { CameraIcon, Facebook, Globe, HomeIcon, Trophy, UserCheck2 } from "lucide-react"

const Header = () => {
    return (
        <header className="border-b">
            <div className="container mx-auto flex justify-between items-center py-3">
                <div className="flex flex-1">
                    <Button style={{ padding: 24 }} type="default" shape="circle" icon={<HomeIcon />} size={'large'} />
                </div>
                <div className="flex-2 flex justify-center gap-3">
                    <Button style={{ padding: 24 }} type="default" shape="circle" icon={<HomeIcon />} size={'large'} />
                    <Button style={{ padding: 24 }} type="default" shape="circle" icon={<CameraIcon />} size={'large'} />
                    <Button style={{ padding: 24 }} type="default" shape="circle" icon={<Trophy />} size={'large'} />
                </div>
                <div className="flex flex-1 justify-end items-center gap-3">
                    <Button style={{ padding: 24 }} type="default" shape="circle" icon={<UserCheck2 />} size={'large'} />
                    <Button style={{ padding: 24 }} type="default" shape="circle" icon={<Globe />} size={'large'} />
                    <Button style={{ padding: 24 }} type="default" shape="circle" icon={<Facebook />} size={'large'} />
                    <Button className="font-medium" style={{ padding: '24px 20px' }} type="default" shape="round" size={'large'}>Đăng nhập</Button>
                </div>
            </div>
        </header>
    )
}

export default Header