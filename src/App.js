import './App.css';
import Card from './components/Card';
import food from './assets/food.jpg';

const cardContent = {
  title: 'Avokado Ezmeli Taco',
  date: '2 Haziran 2021, Çarşamba',
  image: food,
  liked: true,
  desc: "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
  likeCount: 193,
};

function App() {
  return (
    <div className="App">
      <Card content={cardContent}></Card>
    </div>
  );
}

export default App;
