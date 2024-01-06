
function ServerComponent() {
  // サーバー側で取得するデータを想定
  const data = "これはサーバーからのデータです。";

  return (
    <div>
      <p>{data}</p>
    </div>
  );
}

export default ServerComponent;
