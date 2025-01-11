import StoryItem from "./StoryItem";

const stories = [
    {
        _id: '1',
        src: 'something',
        thumbnail: 'https://files.playerduo.net/production/thumbs/videos/8104062d-16f8-4594-8750-08fcf40ad76e__c86b7449-50d5-41b1-91e7-f4341f4a5145__post_video.jpg',
        views: 200,
        user: {
            avatar: 'img',
            name: 'user1'
        }
    },
    {
        _id: '2',
        src: 'something',
        thumbnail: 'https://files.playerduo.net/production/thumbs/videos/8104062d-16f8-4594-8750-08fcf40ad76e__c86b7449-50d5-41b1-91e7-f4341f4a5145__post_video.jpg',
        views: 200,
        user: {
            avatar: 'img',
            name: 'user1'
        }
    },
    {
        _id: '3',
        src: 'something',
        thumbnail: 'https://files.playerduo.net/production/thumbs/videos/8104062d-16f8-4594-8750-08fcf40ad76e__c86b7449-50d5-41b1-91e7-f4341f4a5145__post_video.jpg',
        views: 200,
        user: {
            avatar: 'img',
            name: 'user1'
        }
    },
    {
        _id: '4',
        src: 'something',
        thumbnail: 'https://files.playerduo.net/production/thumbs/videos/8104062d-16f8-4594-8750-08fcf40ad76e__c86b7449-50d5-41b1-91e7-f4341f4a5145__post_video.jpg',
        views: 200,
        user: {
            avatar: 'img',
            name: 'user1'
        }
    },
    {
        _id: '5',
        src: 'something',
        thumbnail: 'https://files.playerduo.net/production/thumbs/videos/8104062d-16f8-4594-8750-08fcf40ad76e__c86b7449-50d5-41b1-91e7-f4341f4a5145__post_video.jpg',
        views: 200,
        user: {
            avatar: 'img',
            name: 'user1'
        }
    },
    {
        _id: '6',
        src: 'something',
        thumbnail: 'https://files.playerduo.net/production/thumbs/videos/8104062d-16f8-4594-8750-08fcf40ad76e__c86b7449-50d5-41b1-91e7-f4341f4a5145__post_video.jpg',
        views: 200,
        user: {
            avatar: 'img',
            name: 'user1'
        }
    },
    {
        _id: '7',
        src: 'something',
        thumbnail: 'https://files.playerduo.net/production/thumbs/videos/8104062d-16f8-4594-8750-08fcf40ad76e__c86b7449-50d5-41b1-91e7-f4341f4a5145__post_video.jpg',
        views: 200,
        user: {
            avatar: 'img',
            name: 'user1'
        }
    },
    {
        _id: '8',
        src: 'something',
        thumbnail: 'https://files.playerduo.net/production/thumbs/videos/8104062d-16f8-4594-8750-08fcf40ad76e__c86b7449-50d5-41b1-91e7-f4341f4a5145__post_video.jpg',
        views: 200,
        user: {
            avatar: 'img',
            name: 'user1'
        }
    },
    {
        _id: '9',
        src: 'something',
        thumbnail: 'https://files.playerduo.net/production/thumbs/videos/8104062d-16f8-4594-8750-08fcf40ad76e__c86b7449-50d5-41b1-91e7-f4341f4a5145__post_video.jpg',
        views: 200,
        user: {
            avatar: 'img',
            name: 'user1'
        }
    }
];

const StoryList = () => {
    return (
        <ul className="flex justify-between">
            {stories.map(story => (
                <StoryItem key={story._id} story={story} />
            ))}
        </ul>
    )
}

export default StoryList