import { Button, Input, Select } from "antd"
import { Search } from "lucide-react";

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
                <Button className="rounded-2xl">Sẵn sàng</Button>
                <Button className="rounded-2xl">Online</Button>
                <Button className="rounded-2xl w-[150px]">Khoảng giá</Button>
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