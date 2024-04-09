import { render, fireEvent } from "@testing-library/react"
import Like from "../like";

describe("Like component", () => {
  test("Muestra 'Likes: 0' por defecto", () => {
    const { getByText } = render(<Like />);
    expect(getByText("Likes: 0")).toBeInTheDocument();
  });

  test("Incrementa el número de likes en uno al hacer clic en Like", () => {
    const { getByText } = render(<Like />);
    const likeButton = getByText("Like");
    fireEvent.click(likeButton);
    expect(getByText("Likes: 1")).toBeInTheDocument();
  });

  test("Decrementa el número de likes en uno al hacer clic en Dislike", () => {
    const { getByText } = render(<Like />);
    const dislikeButton = getByText("Dislike");
    fireEvent.click(dislikeButton);
    expect(getByText("Likes: -1")).toBeInTheDocument();
  });
});
