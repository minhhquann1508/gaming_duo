import { Button, Input, Select } from "antd"
import { Search } from "lucide-react";
import { useState } from "react";

const sexOptions = [
    {
        value: 'all',
        label: 'Tất cả',
    },
    {
        value: 'male',
        label: 'Nam',
    },
    {
        value: 'female',
        label: 'Nữ',
    },
];

const genreOptions = [
    {
        value: 'newbie',
        label: 'Người mới',
    },
    {
        value: 'hot',
        label: 'Hot',
    },
    {
        value: 'vip',
        label: 'Vip',
    },
];

const FilterSection = () => {
    const [isReady, setIsReady] = useState<boolean>(false);
    const [isOnline, setIsOnline] = useState<boolean>(false);

    return (
        <nav className="flex items-center justify-between">
            <div className="flex gap-2">
                <Select
                    showSearch
                    style={{ width: 120 }}
                    placeholder="Giới tính"
                    optionFilterProp="label"
                    options={sexOptions}
                />
                <Select
                    showSearch
                    style={{ width: 100 }}
                    placeholder="Thể loại"
                    optionFilterProp="label"
                    options={genreOptions}
                />
                <Button
                    type={isReady ? 'primary' : 'default'}
                    className="rounded-2xl"
                    onClick={() => setIsReady((prev) => !prev)}
                >
                    Sẵn sàng
                </Button>
                <Button
                    type={isOnline ? 'primary' : 'default'}
                    className="rounded-2xl"
                    onClick={() => setIsOnline((prev) => !prev)}
                >
                    Online
                </Button>
                <Select
                    showSearch
                    style={{ width: 150 }}
                    placeholder="Sống tại"
                    optionFilterProp="label"
                    options={genreOptions}
                />
                <Input style={{ borderRadius: 20, width: 150 }} placeholder="Tên/Url Player" />
                <Input style={{ borderRadius: 20, width: 150 }} placeholder="Tên game" />
            </div>
            <Button
                type="primary"
                className="rounded-2xl"
                icon={<Search size={16} />}
            >
                Tìm kiếm
            </Button>
        </nav>
    )
}

export default FilterSection