const options = [
  {
    _id: "6402fdceb9f9e29ed62d457f",
    name: "Điện thoại",
    parent_id: "0",
    slug: "điện thoại",
    __v: 0,
    children: [
      {
        _id: "6402ff06b9f9e29ed62d4584",
        name: "Chọn theo hãng",
        parent_id: "6402fdceb9f9e29ed62d457f",
        slug: "chọn theo hãng",
        __v: 0,
        children: [
          {
            _id: "6402ff19b9f9e29ed62d4587",
            name: "iphone",
            parent_id: "6402ff06b9f9e29ed62d4584",
            slug: "iphone",
            __v: 0,
            children: [],
          },
          {
            _id: "6402ff25b9f9e29ed62d458a",
            name: "Samsung",
            parent_id: "6402ff06b9f9e29ed62d4584",
            slug: "samsung",
            __v: 0,
            children: [],
          },
          {
            _id: "6402ff4ab9f9e29ed62d458d",
            name: "Xiaomi",
            parent_id: "6402ff06b9f9e29ed62d4584",
            slug: "xiaomi",
            __v: 0,
            children: [],
          },
          {
            _id: "6403022760530887d6c43635",
            name: "Oppo",
            parent_id: "6402ff06b9f9e29ed62d4584",
            slug: "oppo",
            __v: 0,
            children: [],
          },
        ],
      },
      {
        _id: "6403028260530887d6c43643",
        name: "Loại điện thoại",
        parent_id: "6402fdceb9f9e29ed62d457f",
        slug: "loai-djien-thoai",
        __v: 0,
        children: [
          {
            _id: "6403028d60530887d6c43646",
            name: "Android",
            parent_id: "6403028260530887d6c43643",
            slug: "android",
            __v: 0,
            children: [],
          },
        ],
      },
    ],
  },
  {
    _id: "6403024160530887d6c43639",
    name: "Máy tính",
    parent_id: "0",
    slug: "may-tinh",
    __v: 0,
    children: [
      {
        _id: "6403025360530887d6c4363d",
        name: "Chọn theo hãng",
        parent_id: "6403024160530887d6c43639",
        slug: "chon-theo-hang",
        __v: 0,
        children: [
          {
            _id: "6403026e60530887d6c43640",
            name: "Dell",
            parent_id: "6403025360530887d6c4363d",
            slug: "dell",
            __v: 0,
            children: [],
          },
        ],
      },
    ],
  },
  {
    _id: "6403029360530887d6c43649",
    name: "ios",
    parent_id: "0",
    slug: "ios",
    __v: 0,
    children: [],
  },
]
function flattenOptions(options, prefix = "") {
  return options.reduce((acc, option) => {
    const name = prefix ? `${prefix} > ${option.name}` : option.name
    acc.push({ value: option._id, name })
    if (option.children) {
      acc = acc.concat(flattenOptions(option.children, name))
    }
    return acc
  }, [])
}

console.log(flattenOptions(options))
