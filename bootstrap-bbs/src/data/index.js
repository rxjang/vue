export default {
    User: [
        {
            user_id :1,
            name: 'lelana',
            created_at: '2018-09-11 11:42:11'
        },
        {
            user_id :2,
            name: '아이린',
            created_at: '2018-09-11 11:42:11'
        },
        {
            user_id :3,
            name: '조이',
            created_at: '2018-09-11 11:42:11'
        },
    ],
    Content: [
        {
            content_id: 1,
            user_id:1,
            title: '안녕하세요',
            context: '아직 미정입니다.',
            created_at: '2019-01-02 13:11:42',
            updated_at: null
        },
        {
            content_id: 2,
            user_id:3,
            title: '나는 조이야',
            context: '조이랍니다.',
            created_at: '2019-01-02 13:11:42',
            updated_at: null
        },
        {
            content_id: 3,
            user_id:2,
            title: '룰루랄라',
            context: '라라라라',
            created_at: '2019-01-02 13:11:42',
            updated_at: null
        }
    ],
    Comment: [
        {
            comment_id:1,
            user_id:1,
            content_id:3,
            context: '생일축하해요',
            created_at: '2019-01-02 13:11:42',
            updated_at: null
        },
        {
            comment_id:2,
            user_id:3,
            content_id:3,
            context: '나는 조이얌',
            created_at: '2019-01-02 13:11:42',
            updated_at: null
        },
        {
            comment_id:3,
            user_id:2,
            content_id:1,
            context: '안녕하세요',
            created_at: '2019-01-02 13:11:42',
            updated_at: null
        },
    ],
    SubComment: [
        {
            subcomment_id:1,
            comment_id:3,
            user_id:1,
            context:'영광입니당',
            created_at: '2019-01-02 13:11:42',
            updated_at: null
        }
    ]
}