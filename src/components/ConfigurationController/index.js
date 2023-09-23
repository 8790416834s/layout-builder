import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value

      const ToggleShowContent = event => {
        onToggleShowContent(event.target.value)
      }

      const ToggleShowRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      const ToggleShowLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      return (
        <div className="layout-controls">
          <h1>Layout</h1>
          <div>
            <input
              type="checkbox"
              id="content"
              className="content-input"
              value={showContent}
              onChange={ToggleShowContent}
            />
            <label htmlFor="content">Content</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="leftNavbar"
              className="left-input"
              value={showLeftNavbar}
              onChange={ToggleShowLeftNavbar}
            />
            <label htmlFor="leftNavbar">Left Navbar</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="rightNavbar"
              className="right-input"
              value={showRightNavbar}
              onChange={ToggleShowRightNavbar}
            />
            <label htmlFor="rightNavbar">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
