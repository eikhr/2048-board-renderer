import { BoardMeta, Position } from '../../types';

const baseTileElements = (
  position: Position,
  boardMeta: BoardMeta
): { tileContainer: HTMLElement; tileElement: HTMLElement } => {
  const tileContainer = document.createElement('div');
  const tileElement = document.createElement('div');
  tileContainer.appendChild(tileElement);

  tileContainer.classList.add('tile_container');
  tileElement.classList.add('tile');

  tileContainer.style.top = `${(position.row * 100) / boardMeta.rows}%`;
  tileContainer.style.left = `${(position.col * 100) / boardMeta.cols}%`;
  tileContainer.style.width = `${100 / boardMeta.cols}%`;
  tileContainer.style.height = `${100 / boardMeta.rows}%`;

  return { tileContainer, tileElement };
};

export default baseTileElements;
