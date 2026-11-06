const photo = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const gallery = [
  { id: 1, title: 'Morning pour', category: 'Coffee', src: photo('photo-1495474472287-4d71bcdd2085'), ratio: '4/5' },
  { id: 2, title: 'A quiet corner', category: 'Ambience', src: photo('photo-1554118811-1e0d58224f24'), ratio: '4/3' },
  { id: 3, title: 'Fresh from the oven', category: 'Food', src: photo('photo-1509440159596-0249088772ff'), ratio: '1/1' },
  { id: 4, title: 'Latte layers', category: 'Coffee', src: photo('photo-1572442388796-11668a67e53d'), ratio: '3/4' },
  { id: 5, title: 'Brunch table', category: 'Food', src: photo('photo-1414235077428-338989a2e8c0'), ratio: '4/5' },
  { id: 6, title: 'Cafe conversations', category: 'Events', src: photo('photo-1517457373958-b7bdd4587205'), ratio: '4/3' },
  { id: 7, title: 'Chocolate comfort', category: 'Food', src: photo('photo-1606313564200-e75d5e30476c'), ratio: '1/1' },
  { id: 8, title: 'The slow bar', category: 'Coffee', src: photo('photo-1442512595331-e89e73853f31'), ratio: '3/4' },
  { id: 9, title: 'Warm evening glow', category: 'Ambience', src: photo('photo-1501339847302-ac426a4a7cbb'), ratio: '4/5' },
  { id: 10, title: 'Birthday moments', category: 'Events', src: photo('photo-1464349153735-7db50ed83c84'), ratio: '4/3' },
  { id: 11, title: 'Iced and ready', category: 'Coffee', src: photo('photo-1461023058943-07fcbe16d735'), ratio: '3/4' },
  { id: 12, title: 'Cheesecake afternoon', category: 'Food', src: photo('photo-1533134242443-d4fd215305ad'), ratio: '1/1' },
  { id: 13, title: 'Window seats', category: 'Ambience', src: photo('photo-1521017432531-fbd92d768814'), ratio: '4/5' },
  { id: 14, title: 'Coffee workshop', category: 'Events', src: photo('photo-1511081692775-05d0f180a065'), ratio: '4/3' },
  { id: 15, title: 'Breakfast ritual', category: 'Food', src: photo('photo-1533777857889-4be7c70b33f7'), ratio: '3/4' },
  { id: 16, title: 'Espresso details', category: 'Coffee', src: photo('photo-1510707577719-ae7c14805e3a'), ratio: '1/1' },
  { id: 17, title: 'Green corner', category: 'Ambience', src: photo('photo-1559925393-8be0ec4767c8'), ratio: '4/5' },
  { id: 18, title: 'Friends at Millat', category: 'Events', src: photo('photo-1511632765486-a01980e01a18'), ratio: '4/3' },
];
