import './App.scss';

function App() {
  return (
    <div className="trello-master">
      <nav className="navbar app">App Bar</nav>
      <nav className="navbar board">Board Bar</nav>
      <div className="dashboard-columns">
        <div class="column">
          <header>BrainStom</header>
          <ul>
            <li>
              <img src="https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-hoat-hinh-de-thuong-cute-lam-avatar.jpg" alt="trello-nam"/>
              Title: Nam
            </li>
            <li>Add anythings</li>
            <li>Add anythings</li>
            <li>Add anythings</li>
            <li>Add anythings</li>
          </ul>
          <footer>Add another</footer>
        </div>
        <div class="column">
          <header>BrainStom</header>
          <ul>
            <li>
              <img src="https://itcafe.vn/wp-content/uploads/2021/01/anh-de-thuong-1.jpg" alt="trello-nam"/>
              Title: Nam
            </li>
            <li>Add anythings</li>
            <li>Add anythings</li>
            <li>Add anythings</li>
            <li>Add anythings</li>
          </ul>
          <footer>Add another</footer>
        </div>
        <div class="column">
          <header>BrainStom</header>
          <ul>
            <li>
              <img src="https://wap102.com/wp-content/uploads/2020/05/Hinh-nen-khung-long.jpg" alt="trello-nam"/>
              Title: Nam
            </li>
            <li>Add anythings</li>
            <li>Add anythings</li>
            <li>Add anythings</li>
            <li>Add anythings</li>
          </ul>
          <footer>Add another</footer>
        </div>
        <div class="column">
          <header>BrainStom</header>
          <ul>
            <li>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST0cMQc4SA_8RbLXQMu_j3pn-lScKC6d1AMRXE_HoFolpBeEIO6uAApGd92pMfcoIxigE&usqp=CAU" alt="trello-nam"/>
              Title: Nam
            </li>
            <li>Add anythings</li>
            <li>Add anythings</li>
            <li>Add anythings</li>
            <li>Add anythings</li>
          </ul>
          <footer>Add another</footer>
        </div>
        <div class="column">
          <header>BrainStom</header>
          <ul>
            <li>
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDw8PDw8PDQ8PDw8NDQ0PDw8NDg0PFREWFhURFRUYHSggGBolGxUVITEhJSsrOi4vFyAzODMvNygtMCsBCgoKDg0OGxAQFS0dHx0tLS0rLi0rKy0tLS0tKy0tLSstLS0tLS0tLSstKzUtLTUtLS0tOC0tLS4tLSstKzc3Lf/AABEIASsAqAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQYCBAUHA//EAEYQAAICAQIDBQQGBAoLAQAAAAABAgMRBBIFITEGE0FRcSJhgZEHFDJSYqEjcpKyMzRCY4KDorGzwRZDU1RzdITC0dLhJP/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACARAQACAgIDAQEBAAAAAAAAAAABAgMRITESQVETMgT/2gAMAwEAAhEDEQA/APRAAcXtBgABgAAAAAAAAAAAAAAAAAAAAAAAAAAAABBIYAAYGAAGBgAAAAAAAAAAMAAABBIAAjBIAADAADAAAAAAAGAAAAAAYAAAAAAAACAAAAGAMgEAAAAAAAAAAAAAAAAAAAAAgkAAAAAAAZAJAgAAAAAwMAAAAAGAAAAAAABkAAAyMEsAggggAyAAyMgAMjIAAAAAAAAAAAAAAAAAAAAEAggAAAYGAAGBgAAAAAAAAAAAAAAAAABkMBgEEEEAAAAAAAAAAAAAjJBIIySAABQAAAAAMAAAgEEAGQAGRkABkZAAGMiWVDtV2ilGT09E9jh/GLljMfHu4N9H5vw6Ln0ncpadRuVg4hxjT6flbbCEuuznOzHntjlnO/0v0n3rfX6vd/4OHwbsbrNTHvFGOmrn7Xeahy7yzP8AK2L2nnzk0dWf0cajGVq9PJ+Tpsin8dz/ALjXi4zmn1Dp6Lj2lue2u+Dk+kJZrm/SMsNnTTPOuN9mtVpI7tRVGdWed1Uu9qj+tlJx9Wse8cI4/dpmk3K6no6pPdOC865Px/C+XoJq1XLHt6PkGtodZXdCNlct8JLKfTHmmvB+42UzLqAAoAABkMBgEEEEAABAwQGa+q1ddS3WWQqj96cowX5gbAbOauOaX/eKfXesfM3KdRCyKlCUbIvpKElKL+KA0+Pa/wCr6a21faS21++yT2x/Norn0fcHhqNRO25d5XpVGxqXONl83JxlLzxtlL1aZ9u3d/LTVeEp2Wv393FJL52p/A3ezM69NwTWamyNk4WzvlYqeVrgsU4i/D7LefDLZqsPPlnnSz9nuP8A1yzUqMFGqvunRPOZXVz3re14J7Mr3Neh2ylfRnr9PqatRbRHURkp102K+ULOUYtwUXBJY9p+GefoXM6Q521vhoaviVS1FWjsjl6iqyUW8OEsda372tz/AKLPJ+0nDFo9XdRH+DWLaPdVPLUfg1KPwRbON8R0lvFqaVru6vrs01bq7ic13kLHNQVuUouSnteU+uDX+lKlK/S2Y5zqurk/PZKDX+IyE6cHstxP6veoSf6G+SjLyhb0hZ7s/ZfqvI9CizySccprzWGej9m9c79LVOTzNJ12PznBuLfxxn4nO0O+K2+HWBCJDqAAAGAAAIYEgBkGLNPSSlCvVamMIzuWqhp42Sqle9PQlWpSUI+00sylhdTcaNaNNkJTlRqLKFZLfZCMapwlPCW5KcXh4S6eRazqWL1m0aht8H4vdKyf1nEK1RXKLcJ1OU3belJQeWt0K4y2t5XTxPlxGmENXJ1xUe9orssUVtUpKc1GbX3muWfwryNO/jGt3aer9JXLM67766IW1Wck4W5edi5NOLSw5LGUfeqiSlKyyyd1s1GMrJqCxGOdsYqKSSW6XzZq08OeOk+W1Q7byzdSvu1Tf7U1/wCiLFwfiK0vCdFHba5ahWxg6VVKcW5WTcsWPa+WeuSudtv4xX/wF+/MsOg0U9VwXS9xtd9ClKlSe2LshOdcoN+GU5LPvFekvrz5WfgNkZ6aqcHmM474t1wpbTbfOMeSfob7OQ9dpeHafTVai+vTxVcKa3ZLapOEEmkZaLtLob7I1U6zT3WTzsrhbGU5YTbwvRP5G3JztTVoIcRU7Vw+N72OLnFR1ffP2YNSfKTfJLx5HH+lR89F/wBT8v0R07OF2X8UslKEo6ep6a5zkmo3ThDMIR88T9p/qpeJwfpO1SlqaKl1qolOX9bNY/w/zI1MR6lTslq7BXPOpr8M1XR9ZKUJfuQ+ZVDu9ircazb4TotWPNqUGvy3GbdLjnVoX9GRijIxD1AAKAAAIhglgAAAMcGQIMTQfGNLtcvrNG2MlCUu9hhSecLr7n8mYdo71XpNRJqUk63XiL2vM/YTz4Y3Zz7ilV8WqUVOcMX1wcFBRzJvHSDx9l4+HiSd/HSkVmdTbTo9uMd9p5JpqdM8Nc00pJ5T/pHS+jjjsKt+jumoKdjt0spPEXKX26s9E8rcvPdLyOJ2kqUaOF7Xuj9XuW7weVRJY93J8jhyimsNJp9U+aZ0q8OT+ntHaHhFGrplXfR9ZUfbhWpd3Zu/BPK2vqupzuzHZPRaR9/TpLKLmmv/ANFittrXTk1KUVleTPO9Dx7WULFWqtjH7k2r4r0VieF7kb/+mvEcY76v1+r15N7YencV4hVpap3XTUIQXXq5PwjFeMn0SPF+Ka+epvt1FnKVst23Oe7guUIfCOPjka/iF2okp32zukucd79mH6sVyj8EarJIZOp2Znt1um/FKyHzpn/mkctG5wee3VaaXlqK1+09v+ZJ6ar29RMkYxMkc4esABQQAYEEsgkABkACGSQQYWVqScZJSjJOMotJxkn4NFb1vYyqWXRbOiXWMHiylPyw/aS9GWdkhJiJ7eVa7QW6ecaroyrw5SripOVE8/anX4evJPzXQ1bZYi2vBN5fh7y+9vcfVa/+Yrx+xMojNx08141Z1uJcDdde+mU7ZLG6Etr35eN0cLl1z6GHFeER09UJxlKU98YWbm2rN3VqPhh8+XhkcH473OabVKcIpd3ZFbpwi84jJdZJY5Nf/TV4zxKeomnGMY1Qz3e+TUm31nKOPLos9G/M5xFtvde3+f8AObVjmfXxqTkkst4S6tmMJZWcOOeifXHmfLdFPM5qyS6Ris49IrPzMsOXVbY/dz7UvXyXuOz5z6H1009s6pfdupl8rYs+SIuliMn91OS+HP8AyIsdvYPElGEZZSfmk/mZo5vYAAoBkkMAGAADAAEEgCGGSYskirfSBf8Ao9NXnnK6VmPwwraf52RKY2drtfru+1UornDTx7mL/nHzsf7sf6BxGbr08uSd2YzrUuq9Hlpr4ohaeHln9Zuf95kDTCVhdEl6ciAAAmsxkvNNfkDKJB6jwmzfp9PL71NUvnBG6jjdkrd2h034IOp/1c3D/tOwjm9kdJABVAwGAAIYEgAAAQyAzU4pq+4ouu691XOaXm1Hkvng2slb7balfU4qMlJXX1QUotNNRzY+a8P0ePiEtxCirOOb3SeXKX3pPnJ/F5YJZB0eMABQAAAlEBAXbsDqM031f7O3vI/qWRz+9GwtKPNeznEvq2ojOTxVYu6u8FFN+zN+j/KTL7qdc65qMq5KEmoV3bouEpv7MZeMcvknjqc7dvVjtuG8ga2i1SthuSlBpyhOEsboTi9sovHk18eoI22QwGUACGBIAAGLMiGQcXiGhm++k499GVunl3aeZT08NrnVtfLqpSx/Kzg+HaLQS1umqenTUq7e9VdkZUSklCcHHEksP2srPl7ywE4G0mHk2rospeLq7KX/ADkXGPwn9l/Bnxi0+jT9GmevM09VwrT2/wAJp6bPe645XvT6o15OU4fkvLsE4Lzd2N0reYSvq90bN6/tpkw7G6VL2pXzfm7dv7qSHlDP5WUTAwWviPYyS56a3d51XvH7M4r8mvicyHZnWt47mMfxTur2f2cv8i7hmcdocdIhziuskvVpF24X2OrjiWpl38uvdxzCle5+M/jy9xYKdDVDGymqCj9lRrhHHphciTZqMU+3nnBeDT1kkknGj/XXNNRcfGEH/Kb6ZXQ9A1OjdjrjuUaYOE3VGPOcoNOCcs8oppPCXPHXHI2yUjMzt2rWKvnVTGOdqxuk5y685PqwfUDTQACgiGCWADAAABgQyWQySAQ0SAIwCQNCMEMyGBoY4JwSAGAAAABQQYDABkACQMgAAQAZLIYYEgAAAAAAAAAAAAAAABhBgQSwgAAAAglhgQyWQyQAAAAAAAAAAAAAAAAP/9k=" alt="trello-nam"/>
              Title: Nam
            </li>
            <li>Add anythings</li>
            <li>Add anythings</li>
            <li>Add anythings</li>
            <li>Add anythings</li>
          </ul>
          <footer>Add another</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
