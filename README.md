ЗАДАЧА 1
Профиль социальной сети
Необходимо создать компонент <Profile>, с помощью которого мы могли бы отображать информацию о пользователе социальной сети. Данные о пользователе лежат в файле user.json.

Превью компонента Profile

Описание компонента
Компонент должен принимать несколько пропсов с информацией о пользователе:

name — имя пользователя
tag — тег в социальной сети без @
location — город и страна
avatar — url на изображение
stats — объект с информацией об активности
Компонент должен создавать DOM элемент следующей структуры.

<div class="profile">
  <div class="description">
    <img
      src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
      alt="Аватар пользователя"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
Пример использования
import user from 'путь/к/user.json;

<Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

ЗАДАЧА 2

Секция статистики
Создать компонет <Statistics>, который бы отображал статистику по переданным пропам. К примеру загрузки в облако по типу файлов, посещение веб-страницы пользователями разных стран, финансовые траты и т. п. Данные о статистике лежат в файле statistical-data.json.

Превью компонента Statistics

Описание компонента
Компонент должен принимать два пропа title и stats, в которых указывается заголовок и объект статистики.

title - не обязателен, и если он не передан, не должна рендериться разметка заголовка <h2>.
stats - массив объектов содержащих информацию о элементе статистики. Может иметь произвольное кол-во элементов.
Цвет фона элемента статистики в оформлении можно пропустить, либо создать функцию для генерации случайного цвета.
Компонент должен создавать DOM элемент следующей структуры.

<section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>
Пример использования
import statisticalData from '/путь/к/statistical-data.json';

<Statistics title="Upload stats" stats={statisticalData} />;
<Statistics stats={statisticalData} />;

ЗАДАЧА 3

{/_ /_ /_ <Profile _/}
// name={user.name}
// tag={user.tag}
// location={user.location}
// avatar={user.avatar}
// stats={user.stats}
// />
// _/ _/}
// {/_ <TaskCard
// // key={taskList[1].id}
// taskName={taskList[1].name} >
{/_
</TaskCard></li>

<li> <TaskCard _/}
{/_ // key={taskList[2].id}
// taskName={taskList[2].name} >
</TaskCard> </li>
<li> <TaskCard _/}
{/_ // key={taskList[3].id}
// taskName={taskList[3].name} >

                    // </TaskCard></li> */}
                    {/* //   </ul> */}
