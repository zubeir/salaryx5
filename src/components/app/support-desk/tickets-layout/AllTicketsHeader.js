import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import paths from 'routes/paths';
import { Link } from 'react-router-dom';
import { Button, Col, Dropdown, Form, Row } from 'react-bootstrap';
import IconButton from 'components/common/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import AdvanceTableSearchBox from 'components/common/advance-table/AdvanceTableSearchBox';

const AllTicketsHeader = ({ layout, handleShow }) => {
  const { getSelectedRowModel } = useAdvanceTableContext();

  return (
    <div className="d-lg-flex justify-content-between">
      <Row className="flex-between-center gy-2 px-x1">
        <Col xs="auto" className="pe-0">
          <h6 className="mb-0">All Applicants</h6>
        </Col>
        <Col xs="auto">
          <AdvanceTableSearchBox
            className="input-search-width"
            placeholder="Search by name"
          />
        </Col>
      </Row>
      <div className="border-bottom border-200 my-3"></div>
      <div className="d-flex align-items-center justify-content-between justify-content-lg-end px-x1">
        <IconButton
          variant="falcon-default"
          size="sm"
          icon="filter"
          transform="shrink-4"
          iconAlign="middle"
          onClick={handleShow}
          className="d-xl-none"
        >
          <span className="d-none d-sm-inline-block ms-1">Filter</span>
        </IconButton>
        <div
          className="bg-300 mx-3 d-none d-lg-block d-xl-none"
          style={{ width: '1px', height: '29px' }}
        ></div>
        {getSelectedRowModel().rows.length > 0 ? (
          <div className="d-flex">
            <Form.Select size="sm" aria-label="Bulk actions">
              <option>Bulk Actions</option>
              <option value="Run Background Check">Run Background Check</option>
              <option value="Schedule Interview">Schedule Interview</option>
              <option value="archive">Archive</option>
            </Form.Select>
            <Button
              type="button"
              variant="falcon-default"
              size="sm"
              className="ms-2"
            >
              Apply
            </Button>
          </div>
        ) : (
          <div id="orders-actions">
            <Dropdown
              align="end"
              className="btn-reveal-trigger d-inline-block me-2"
            >
              <Dropdown.Toggle split variant="falcon-default" size="sm">
                <span className="d-none d-sm-inline-block d-xl-none d-xxl-inline-block me-1">
                  {layout === 'table-view' ? 'Table view' : 'Card view'}
                </span>
                <FontAwesomeIcon icon="chevron-down" transform="shrink-2" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="border py-0">
                <div className="py-2">
                  <Link
                    className={classNames('dropdown-item', {
                      active: layout === 'table-view'
                    })}
                    to={paths.ticketsTable}
                  >
                    Table View
                  </Link>
                  <Link
                    className={classNames('dropdown-item', {
                      active: layout === 'card-view'
                    })}
                    to={paths.ticketsCard}
                  >
                    Card View
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>


            <Dropdown align="end" className="btn-reveal-trigger d-inline-block">
              <Dropdown.Toggle split variant="falcon-default" size="sm">
                <FontAwesomeIcon icon="ellipsis-h" className="fs-11" />
              </Dropdown.Toggle>

              <Dropdown.Menu className="border py-0">
                <div className="py-2">
                  <Dropdown.Item>View</Dropdown.Item>
                  <Dropdown.Item>Export</Dropdown.Item>
                  <Dropdown.Divider />

                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
      </div>
    </div>
  );
};


const AllTicketsHeaderOrig = ({ layout, handleShow }) => {
  const { getSelectedRowModel } = useAdvanceTableContext();

  return (
    <div className="d-lg-flex justify-content-between">
      <Row className="flex-between-center gy-2 px-x1">
        <Col xs="auto" className="pe-0">
          <h6 className="mb-0">All Applicants</h6>
        </Col>
        <Col xs="auto">
          <AdvanceTableSearchBox
            className="input-search-width"
            placeholder="Search by name"
          />
        </Col>
      </Row>
      <div className="border-bottom border-200 my-3"></div>
      <div className="d-flex align-items-center justify-content-between justify-content-lg-end px-x1">
        <IconButton
          variant="falcon-default"
          size="sm"
          icon="filter"
          transform="shrink-4"
          iconAlign="middle"
          onClick={handleShow}
          className="d-xl-none"
        >
          <span className="d-none d-sm-inline-block ms-1">Filter</span>
        </IconButton>
        <div
          className="bg-300 mx-3 d-none d-lg-block d-xl-none"
          style={{ width: '1px', height: '29px' }}
        ></div>
        {getSelectedRowModel().rows.length > 0 ? (
          <div className="d-flex">
            <Form.Select size="sm" aria-label="Bulk actions">
              <option>Bulk Actions</option>
              <option value="refund">Refund</option>
              <option value="delete">Delete</option>
              <option value="archive">Archive</option>
            </Form.Select>
            <Button
              type="button"
              variant="falcon-default"
              size="sm"
              className="ms-2"
            >
              Apply
            </Button>
          </div>
        ) : (
          <div id="orders-actions">
            <Dropdown
              align="end"
              className="btn-reveal-trigger d-inline-block me-2"
            >
              <Dropdown.Toggle split variant="falcon-default" size="sm">
                <span className="d-none d-sm-inline-block d-xl-none d-xxl-inline-block me-1">
                  {layout === 'table-view' ? 'Table view' : 'Card view'}
                </span>
                <FontAwesomeIcon icon="chevron-down" transform="shrink-2" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="border py-0">
                <div className="py-2">
                  <Link
                    className={classNames('dropdown-item', {
                      active: layout === 'table-view'
                    })}
                    to={paths.ticketsTable}
                  >
                    Table View
                  </Link>
                  <Link
                    className={classNames('dropdown-item', {
                      active: layout === 'card-view'
                    })}
                    to={paths.ticketsCard}
                  >
                    Card View
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>
            <IconButton
              variant="falcon-default"
              size="sm"
              icon="plus"
              transform="shrink-3"
              iconAlign="middle"
            >
              <span className="d-none d-sm-inline-block d-xl-none d-xxl-inline-block ms-1">
                New
              </span>
            </IconButton>
            <IconButton
              variant="falcon-default"
              size="sm"
              icon="external-link-alt"
              transform="shrink-3"
              className="mx-2"
              iconAlign="middle"
            >
              <span className="d-none d-sm-inline-block d-xl-none d-xxl-inline-block ms-1">
                Export
              </span>
            </IconButton>
            <Dropdown align="end" className="btn-reveal-trigger d-inline-block">
              <Dropdown.Toggle split variant="falcon-default" size="sm">
                <FontAwesomeIcon icon="ellipsis-h" className="fs-11" />
              </Dropdown.Toggle>

              <Dropdown.Menu className="border py-0">
                <div className="py-2">
                  <Dropdown.Item>View</Dropdown.Item>
                  <Dropdown.Item>Export</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className="text-danger">Remove</Dropdown.Item>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
      </div>
    </div>
  );
};
AllTicketsHeader.propTypes = {
  handleShow: PropTypes.func,
  layout: PropTypes.string
};

export default AllTicketsHeader;
