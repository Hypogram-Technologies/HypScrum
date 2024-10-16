export function voltar() {
  if (window.opener) {
    window.close();
  } else {
    window.history.back();
  }
}
