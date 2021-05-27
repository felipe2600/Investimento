import "antd/dist/antd.css";
import { Table, Button, message, Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import { useState } from "react";

const { Header, Content, Footer } = Layout;
const { Column } = Table;

export default function ListarInvestimento() {

    const [investimento, setInvestimento] = useState([]);

    function remove(record){
        message.success('Investimento removido com sucesso');
    }

    return (
        <div className="container">
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">
                            <Link to="/cadastrar-investimento">
                                Cadastrar Investimento
                        </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/listar-investimentos">
                                Listar Investimentos
                        </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">
                        <h2>Investimentos</h2>
                        <Table dataSource={investimento}>
                            <Column title="Código do ativo" dataIndex="codigoAtivo" key="codigoativo" />
                            <Column title="Valor" dataIndex="valor" key="valor" />
                            <Column title="Quantidade de Cotas" dataIndex="quantidadeCotas" key="quantidadeCotas" />
                            <Column title="Data da Compra" dataIndex="dataCompra" key="dataCompra" />
                            <Column title="Remover" key="atualizar"
                                render={(text, record) => (<Button onClick={() => remove(record)}
                                    type="primary">Remover</Button>)}
                            />

                        </Table>

                    </div>

                </Content>






                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>


        </div>


    );

}