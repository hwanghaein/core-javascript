//'beforebegin' : elem 바로 앞에 html을 삽입

function insertBefore(node, text) {
  if (typeof node === 'string') node = getNode(node);

  if (node.nodeType !== document.ELEMENT_NODE) {
    typeError('insertBefore 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');
  }

  node.insertAdjacentHTML('beforebegin', text);
}


// 'afterbegin' : elem의 첫 번째 자식 요소 바로 앞에 html을 삽입

function insertFirst(node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE) {
    typeError('insertFirst 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');

  }
  node.insertAdjacentHTML('afterbegin', text);
}


// 'beforeend' : elem의 마지막 자식 요소 바로 다음에 html을 삽입

function insertLast(node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE) {
    refError('insertLast 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');
  }
  node.insertAdjacentHTML('beforeend', text);
}


//'afterend' : elem 바로 다음에 html을 삽입합니다.

function insertAfter(node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE) {
    
    refError('insertAfter 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');
    
  }
  node.insertAdjacentHTML('afterend', text);
}