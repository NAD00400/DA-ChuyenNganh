import { Button, ConfigProvider, Flex, Space, Table, Tag } from "antd";

const columns = [
    {
      title: 'Event Name',
      dataIndex: 'nameEvent',
      key: 'nameEvent',
      render: (text) => <a>{text}</a>,
    },
    
    {
      title: 'Start Time',
      dataIndex: 'startTime',
      key: 'startTime',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
    },
    {
        title: 'Link Video',
        dataIndex: 'video',
        key: 'video',
    },
    {
        title: 'Describe',
        dataIndex: 'describe',
        key: 'describe',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Update {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
        id: '1',
        nameEvent: 'Explore Python',
        startTime: "3:00 12/4/2002",
        describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Disates repellat corrupti quis deserunt?',
        tags: ['nice', 'developer'],
        video:"video",
        image:"132412412340.png"

    },
    {
        id: '1',
        nameEvent: 'Explore Python',
        startTime: "3:00 12/4/2002",
        describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Disates repellat corrupti quis deserunt?',
        tags: ['nice', 'developer'],
        video:"video",
        image:"132412412340.png"

    },
    {
        id: '1',
        nameEvent: 'Explore mobile',
        startTime: "3:00 12/4/2002",
        describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Disates repellat corrupti quis deserunt?',
        tags: ['nice', 'developer'],
        video:"video",
        image:"132412412340.png"

    },
    {
        id: '1',
        nameEvent: 'Explore Game 2D',
        startTime: "3:00 12/4/2002",
        describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Disates repellat corrupti quis deserunt?',
        tags: ['nice', 'developer'],
        video:"video",
        image:"132412412340.png"

    },
  ];
  const EventMm=()=>{
    return(  <>

    <Flex vertical style={{width:"100%"}}>
    <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      defaultColor: "#000",
                      defaultBg: "#F77F00",
                      defaultHoverColor: "#000",
                      defaultHoverBg: "#Fa3F00",
                      defaultHoverBorderColor: "#Fa3F00",
                    },
                  },
                }}>
        <Button style={{margin:"5px 0px"}} >New Event</Button>
    </ConfigProvider>
        <Table columns={columns} dataSource={data}/>
    </Flex>
    </>)
}

export {EventMm}