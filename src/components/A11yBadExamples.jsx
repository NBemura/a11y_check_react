import React from "react";

// アクセシビリティの問題を意図的に含むコンポーネント
export function A11yBadExamples() {
  return (
    <div>
      {/* alt属性なし */}
      <img src="https://placehold.jp/150x150.png" />

      {/* ラベルのないボタン */}
      <button>あああ</button>

      {/* コントラストが低いテキスト */}
      <p style={{ color: "#cccccc", background: "#ffffff" }}>
        コントラストが低いテキスト
      </p>

      {/* labelのないinput */}
      <input type="text" placeholder="名前" />

      {/* キーボードで操作できないdiv */}
      <div onClick={() => alert('クリックされました')} style={{ cursor: 'pointer', background: '#eee', padding: '10px', width: '200px' }}>
        クリックできるがキーボード操作不可
      </div>

      {/* 不適切なtabIndex（0以外の正の値） */}
      <div tabIndex="5">不適切なtabIndex</div>

      {/* 不正なaria属性 */}
      <div aria-labl="test">typoしたaria属性</div>

      {/* aタグのhrefなし */}
      <a>リンクだがhrefがない</a>

      {/* role属性の誤用 */}
      <div role="button">roleだけでキーボード操作不可</div>
    </div>
  );

}
