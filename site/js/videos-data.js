/* Блок «Мои видео» (ИИшница). Каждая карточка:
     title  — подпись
     file   — путь к mp4 (например 'video/alexey.mp4') + poster — картинка-превью ('video/alexey.jpg')
     youtube — либо ID ролика YouTube (необязательно start: секунды)
   Если file и youtube пустые — показывается заглушка «скоро». Чтобы заменить заглушку, просто впишите file/poster или youtube. */
window.RUDIK_VIDEOS = [
  { title: 'Алексей',                           file: 'video/alexey.mp4',       poster: 'video/alexey.jpg' },
  { title: 'Алина в школе',                     file: 'video/alina-school.mp4', poster: 'video/alina-school.jpg' },
  { title: 'Алина Новогоднее поздравление',     file: 'video/alina-ny.mp4',     poster: 'video/alina-ny.jpg' },
  { title: 'ЗВ',                                file: 'video/zv.mp4',           poster: 'video/zv.jpg' },
  { title: 'Канцлер',                           file: '', youtube: '' },
  { title: 'Мошенники',                         file: '', youtube: '' },
  { title: 'Открытка',                          file: '', youtube: '' },
  { title: 'Собаки блогеры',                    file: '', youtube: '' },
  { title: 'Кот-детектив',                      file: '', youtube: '' },
  { title: 'Котмонавты',                        file: '', youtube: '' },
  { title: 'Роскосмос',                         file: '', youtube: '' },
  { title: 'Серёгиус',                          file: '', youtube: '' }
];
