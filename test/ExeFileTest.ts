import assert from 'assert'
import { ExeFile } from '../src'

describe('ExeFile', () => {
  it('detects macos', () => {
    const exeFile = new ExeFile('gherkin-{{.OS}}-{{.Arch}}{{.Ext}}', {
      os: 'darwin',
      arch: 'x64',
    })

    assert.strictEqual(exeFile.fileName, 'gherkin-darwin-amd64')
  })

  it('detects windows x32', () => {
    const exeFile = new ExeFile('gherkin-{{.OS}}-{{.Arch}}{{.Ext}}', {
      os: 'win32',
      arch: 'x32',
    })

    assert.strictEqual(exeFile.fileName, 'gherkin-windows-386.exe')
  })

  it('detects windows ia32', () => {
    const exeFile = new ExeFile('gherkin-{{.OS}}-{{.Arch}}{{.Ext}}', {
      os: 'win32',
      arch: 'ia32',
    })

    assert.strictEqual(exeFile.fileName, 'gherkin-windows-386.exe')
  })
})
