import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScreenHome from './pages/Screen-home/Screen';
import ScreenAbout from './pages/Screen-about/Screen';
import ScreenPricing from './pages/Screen-pricing/Screen';
import ScreenContact from './pages/Screen-contact/Screen';
import Screen1 from './pages/Screen-1/Screen';
import ScreenLayersLong from './pages/Screen-layers-long/Screen';
import ScreenHidden from './pages/Screen-hidden/Screen';
import ScreenFill from './pages/Screen-fill/Screen';
import ScreenStyleSources from './pages/Screen-style-sources/Screen';
import ScreenStyleProbe from './pages/Screen-style-probe/Screen';
import ScreenUnreadable from './pages/Screen-unreadable/Screen';
import ScreenAddProps from './pages/Screen-add-props/Screen';
import ScreenFocus from './pages/Screen-focus/Screen';
import ScreenTokens from './pages/Screen-tokens/Screen';
import ScreenMultiComponent from './pages/Screen-multi-component/Screen';
import ScreenTokenScope from './pages/Screen-token-scope/Screen';

/**
 * Адреса экранов приложения.
 *
 * Файл ведёт редактор: экран добавляется, переименовывается и удаляется вместе
 * со своим адресом. Править вручную можно — адрес в этом файле и есть истина.
 */
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScreenHome />} />
        <Route path="/about/:recordKey?" element={<ScreenAbout />} />
        <Route path="/pricing/:recordKey?" element={<ScreenPricing />} />
        <Route path="/contact/:recordKey?" element={<ScreenContact />} />
        <Route path="/1/:recordKey?" element={<Screen1 />} />
        <Route path="/layers-long/:recordKey?" element={<ScreenLayersLong />} />
        <Route path="/hidden/:recordKey?" element={<ScreenHidden />} />
        <Route path="/fill/:recordKey?" element={<ScreenFill />} />
        <Route path="/style-sources/:recordKey?" element={<ScreenStyleSources />} />
        <Route path="/style-probe/:recordKey?" element={<ScreenStyleProbe />} />
        <Route path="/unreadable/:recordKey?" element={<ScreenUnreadable />} />
        <Route path="/add-props/:recordKey?" element={<ScreenAddProps />} />
        <Route path="/focus/:recordKey?" element={<ScreenFocus />} />
        <Route path="/tokens/:recordKey?" element={<ScreenTokens />} />
        <Route path="/multi-component/:recordKey?" element={<ScreenMultiComponent />} />
        <Route path="/token-scope/:recordKey?" element={<ScreenTokenScope />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}
