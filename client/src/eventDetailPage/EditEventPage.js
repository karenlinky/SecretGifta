import React from 'react'
import Header from '../header/Header'
import PageTitle from '../functionalComponents/pageTitle/PageTitle'
import { Formik, Form } from "formik";
import Text from '../functionalComponents/text/Text';
import TextBox from '../functionalComponents/textBox/TextBox';
import ValidatedField from '../functionalComponents/validatedField/ValidatedField';
import './eventDetailPage.css'

const EditEventPage = () => {
    return (
        <Header>
            <PageTitle>Event</PageTitle>
            <Formik
                // initialValues={initialValues}
                // validationSchema={loginSchema}
                // onSubmit={login}
                >
                <Form>
                    <div className={"eventDetailSection"}>
                        <div><Text className={"eventDetailSectionHeader"}>Event Name</Text></div>
                        <div className={"eventDetailSectionContent"}>
                            <ValidatedField
                                as={TextBox}
                                name={"name"}
                                placeholder={"Name"}
                            />
                        </div>
                    </div>
                    <div className={"eventDetailSection"}>
                        <div><Text className={"eventDetailSectionHeader"}>Event Name</Text></div>
                        <div className={"eventDetailSectionContent"}>
                            <ValidatedField
                                as={TextBox}
                                name={"name"}
                                placeholder={"Name"}
                            />
                        </div>
                    </div>
                    <div className={"eventDetailSection"}>
                        <div><Text className={"eventDetailSectionHeader"}>Event Name</Text></div>
                        <div className={"eventDetailSectionContent"}>
                            <ValidatedField
                                as={TextBox}
                                name={"name"}
                                placeholder={"Name"}
                            />
                        </div>
                    </div>
                </Form>
            </Formik>
        </Header>
    )
}

export default EditEventPage
