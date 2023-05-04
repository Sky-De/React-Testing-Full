import { render, screen } from '@testing-library/react'
import ApplicationForm from './ApplicationForm'


describe('Application', () => {
  test('renders', () => {
    render(<ApplicationForm />)
    // getByRole
    const pageHeadingH1 = screen.getByRole('heading', {name: /job application form/i});
    expect(pageHeadingH1).toBeInTheDocument();

    const pageHeadingH2 = screen.getByRole('heading', {level: 2});
    expect(pageHeadingH2).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox',{name: "Name"});
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox',{name: "Bio"});
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    const submitBtnElement = screen.getByRole('button');
    expect(submitBtnElement).toBeInTheDocument();
    
    // getByLableText

    // if we had two element with same LabelText(dropDown and inut for example) we can use selector to get intened element
    const nameElement2 = screen.getByLabelText('Name',{selector:"input"});
    expect(nameElement2).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText('I agree to the terms and conditions');
    expect(termsElement2).toBeInTheDocument();
    


    

    
  })
})
